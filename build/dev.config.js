'use strict'
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const portfinder = require('portfinder')

const baseConfig = require('./base.config')
const config = require('./config')

const devConfig = merge(baseConfig, {
  output: {
    filename: '[name].[hash].js'
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    compress: true,
    // quiet: true,
    port: config.DEV_PORT,
    open: true,
    clientLogLevel: 'none',
    watchOptions: {
      poll: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:4004',
        pathRewrite: {"^/api" : ""},
        changeOrigin: true
      }
    }
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.ejs'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.DEV_PORT
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devConfig.devServer.port = port

      resolve(devConfig)
    }
  })
})