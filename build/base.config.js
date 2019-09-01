const path = require('path')

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const { entries } = require('./utils')
const { BUILD, STATIC } = require('../config/index')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const genHtmlConfig = () => {
  const plugins = []
  Object.keys(entries).forEach((key) => {
    plugins.push(
      new HtmlWebpackPlugin({
        chunks: [key, 'manifest', 'common', 'common[vue]'],
        filename: BUILD.GET_HTML_PATH(key),
        template: './index.ejs',
        minify: {
          collapseWhitespace: true
        }
      })
    )
  })

  return plugins
}

module.exports = {
  context: path.resolve(__dirname, `../`),
  entry: entries,
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, `../src`),
      'R': path.resolve(__dirname, `../`)
    }
  },
  mode: process.env.NODE_ENV,
  stats: { children: false }, // 解决webpack4中 Entrypoint undefined = index.html 的问题
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: BUILD.CSS_HMR
            }
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          // cache: true,
          formatter: require('eslint-friendly-formatter'),
          emitWarning: false
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          limit: 10000,
          outputPath: './img',
          publicPath: BUILD.FILE_PUBLIC_PATH
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: '**/*.((le|c)ss|vue)'
    }),
    new webpack.DefinePlugin({
      'window.GLOABLE_CONFIG': JSON.stringify({
        SERVER_STATIC_PATH: BUILD.SERVER_STATIC_PATH,
        STATIC_CONFIG: STATIC
      })
    }),
    ...genHtmlConfig()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: false
        }
      })
    ]
  }
}
