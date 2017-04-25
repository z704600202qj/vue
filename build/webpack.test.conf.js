// This is the webpack config used for unit tests. 这是用于单元测试的webpack配置。

var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')

var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader 使用内联sourcemap for karma-sourcemap-loader

  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ]
})

// no need for app entry during tests 测试期间无需进入应用程序
delete webpackConfig.entry

module.exports = webpackConfig
