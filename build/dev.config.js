'use strict'
const merge = require('webpack-merge')
const portfinder = require('portfinder')

const baseConfig = require('./base.config')
const { BUILD, MOCKER } = require('../config/index')

const devConfig = merge(baseConfig, {
  output: {
    filename: '[name].[hash:8].js'
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    compress: true,
    // quiet: true,
    contentBase: BUILD.LOCAL_STATIC_PATH,
    port: BUILD.DEV_PORT,
    open: true,
    clientLogLevel: 'none',
    watchOptions: {
      poll: true
    },
    openPage: 'dev/webpack-dev-server.html',
    proxy: {
      '/api': {
        target: `http://localhost:${MOCKER.MOCK_PORT}`,
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    },
    allowedHosts: [
      'ublog-b.com'
    ]
    // clientLogLevel: 'error'
  },
  devtool: BUILD.DEVTOOL
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || BUILD.DEV_PORT
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
