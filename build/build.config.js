'use strict'
const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const { BUILD } = require('../config/index')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConfig = require('./base.config')

const buildConfig = merge(baseConfig, {
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
    new webpack.optimize.RuntimeChunkPlugin({
      name: 'manifest'
    }),
    new CopyWebpackPlugin([ // dev模式采用 contentBase 指定静态资源, 故不使用高插件
      {
        from: BUILD.DIST_STATIC_PATH,
        to: 'static',
        ignore: BUILD.COPY_PLUGIN_IGN
      },
      {
        from: path.join(BUILD.DIST_STATIC_PATH, 'ublog.ico'),
        to: '../'
      }
    ])
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }), new OptimizeCSSAssetsPlugin({})],
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 5000,
          name: 'common',
          priority: 1
        },
        commonChuncksForVue: {
          chunks: 'initial',
          test: (module, chunks) => /vue/.test(module.context),
          name: 'common[vue]',
          priority: 2
        }
      }
    }
  }
})

if (process.env.npm_config_analyze) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  buildConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = buildConfig
