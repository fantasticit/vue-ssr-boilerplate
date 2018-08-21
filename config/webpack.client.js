process.noDeprecation = true
process.env.VUE_ENV = 'client'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglyfyJsPlugin = require('uglifyjs-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const baseConfig = require('./webpack.base')

const clientConfig = merge(baseConfig, {
  entry: {
    app: path.resolve(__dirname, '../src/entry-client.js')
  },

  optimization: {
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    // 生成 `vue-ssr-client-manifest.json`
    new VueSSRClientPlugin()
  ]
})

if (process.env.NODE_ENV === 'production') {
  clientConfig.optimization.minimizer = [
    new UglyfyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: true,
        ecma: 6,
        mangle: true
      },
      sourceMap: true
    })
  ]

  clientConfig.optimization.splitChunks = {
    cacheGroups: {
      commons: {
        chunks: 'initial',
        minChunks: 2,
        maxInitialRequests: 5,
        minSize: 0
      },

      vendor: {
        test: /node_modules/,
        chunks: 'initial',
        name: 'vendor',
        priority: 10,
        enforce: true
      }
    }
  }

  clientConfig.plugins.push(
    new SWPrecachePlugin({
      cacheId: 'vue-ssr-justemit',
      filename: 'service-worker.js',
      minify: true,
      // 设置为 false, sw生成的缓存是 filename?hash 形式，以便于浏览器更新缓存
      dontCacheBustUrlsMatching: false,
      // 忽略文件
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.css$/]
    })
  )
}

module.exports = clientConfig
