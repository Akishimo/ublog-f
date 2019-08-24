const path = require('path');
const fs = require('fs')
const webpack = require('webpack');

const { VueLoaderPlugin } = require('vue-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin =require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const PORTAL_BASE_PATH = './src/modules'
const BUILD_ASSERT_PATH = 'assets'
const assets = ['main.js']
const entry = ['babel-polyfill']
const lastArg = process.argv.pop()
const directory = /^--MODULE=/.test(lastArg) ? lastArg.replace(/^--MODULE=/, '') : ''

if (!directory) {
  console.info('Please use command like npm run dev -- --MODULE=<module>')
  process.exit()
}

assets.forEach(function (asset) {
  if (fs.existsSync(path.join(PORTAL_BASE_PATH, directory, asset))) {
    entry.push([PORTAL_BASE_PATH, directory, asset].join('/'))
  } else {
    console.info(`Cannot found ${directory} module`)
    process.exit()
  }
})

module.exports = {
  entry: entry,
  output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].[hash].js'
  },
  devServer: {
      historyApiFallback: true,
      overlay: true
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  stats: { children: false }, // 解决webpack4中 Entrypoint undefined = index.html 的问题
  mode: process.env.NODE_ENV,
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: [
                'css-loader'
              ]
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              use: ['css-loader', 'less-loader'],
              fallback: 'vue-style-loader'
            })
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
              name: '[name].[ext]?[hash]',
              outputPath: './img',
              publicPath: './img'
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
              loaders: {
                  'less': [
                      'vue-style-loader',
                      'css-loader',
                      'less-loader'
                  ]
              }
          }
      }
    ]
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin('[name].[hash].css', { allChunks: true }),
    new VueLoaderPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
            compress: false
        }
      })
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.output.path = path.resolve(__dirname, `dist/${directory}/${BUILD_ASSERT_PATH}`)
  module.exports.output.publicPath = `./${BUILD_ASSERT_PATH}/`
  module.exports.module.rules[3].options.publicPath = `./${BUILD_ASSERT_PATH}/img`
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './index.ejs'
    }),
    new webpack.optimize.SplitChunksPlugin({
      cacheGroups: {
          default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
          },
          //打包重复出现的代码
          vendor: {
              chunks: 'initial',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              name: 'vendor'
          },
          //打包第三方类库
          commons: {
              name: 'commons',
              chunks: 'initial',
              minChunks: Infinity
          }
      }
    }),
    new webpack.optimize.RuntimeChunkPlugin({
        name: 'manifest'
    })
  ])
  module.exports.devtool = '#source-map';
}

if (process.env.NODE_ENV === 'development') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.ejs'
    })
  ])
}