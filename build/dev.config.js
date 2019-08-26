'use strict'
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./base.config')

const devConfig = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.ejs'
    })
  ]
})

module.exports = devConfig