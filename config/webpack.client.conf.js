process.noDeprecation = true
process.env.VUE_ENV = 'client'

const merge = require('webpack-merge')
const UglyfyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const isProd = require('../utils/isProd')
const { resolve } = require('../utils/path')
const baseConfig = require('./webpack.base.conf')

const clientConfig = merge(baseConfig, {
  entry: {
    app: resolve('./src/entry-client.js')
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

if (isProd) {
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
    }),
    new OptimizeCSSAssetsPlugin({})
  ]

  clientConfig.optimization.splitChunks = {
    // 模块提取规则
    chunks: function(module) {
      return (
        // 如果它在 node_modules 中
        /node_modules/.test(module.context) &&
        // 如果 request 是一个 CSS 文件，则无需外置化提取
        !/\.css$/.test(module.request)
      )
    },

    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      },

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
