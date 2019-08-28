'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { BUILD } = require('../config/index')
const baseConfig = require('./base.config')

const devConfig = merge(baseConfig, {
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, `../dist/${BUILD.BUILD_ASSERT_PATH}`),
    publicPath: `./${BUILD.BUILD_ASSERT_PATH}/`
  },
  devtool: false,
  performance: {
    hints: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.SplitChunksPlugin({
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        // 打包重复出现的代码
        vendor: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          name: 'vendor'
        },
        // 打包第三方类库
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
  ]
})

module.exports = devConfig
