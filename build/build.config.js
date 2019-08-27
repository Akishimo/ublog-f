'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { moduleName } = require('./utils')
const { BUILD_ASSERT_PATH } = require('./config')
const baseConfig = require('./base.config')

const devConfig = merge(baseConfig, {
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, `../dist/${moduleName}/${BUILD_ASSERT_PATH}`),
    publicPath: `./${BUILD_ASSERT_PATH}/`
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
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './index.ejs'
    })
  ]
})

module.exports = devConfig