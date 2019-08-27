const path = require('path')

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin =require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { entries } = require('./utils')
const { FILE_PUBLIC_PATH, CSS_HMR } = require('./config')

module.exports = {
  context: path.resolve(__dirname, `../`),
  entry: entries,
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, `../src`)
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
              hmr: CSS_HMR
            },
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          cache: true,
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
            publicPath: FILE_PUBLIC_PATH
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/static'),
        to: 'static'
      }
    ])
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
};
