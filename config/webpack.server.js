// 用于生成传递给 createBundleRenderer 的 server bundle
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/entry-server.js'),

  // 告知 webpack 以 Node 使用方式处理 动态导入
  // 告知 vue-loader 输送 面向服务器的代码
  target: 'node',

  devtool: 'source-map',

  // 告知 server bundle 使用 Node 风格导出 模块
  output: {
    libraryTarget: 'commonjs2'
  },

  // 将服务器的整个输出构建为单个 JSON 文件，默认名：vue-ssr-server-bundle.json
  plugins: [new VueSSRServerPlugin()]
})
