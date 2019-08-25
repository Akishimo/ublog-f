'use strict'
// const webpack = require('webpack')
const merge = require('webpack-merge')
// const path = require('path')
const baseConfig = require('./base.config')
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const devConfig = merge(baseConfig, {})

module.exports = devConfig