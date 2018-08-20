const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglyfyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./webpack.base')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

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
        enforce: true,
        minChunks: function(module) {
          returnn(
            /node_modules/.test(module.context) && !/\.css/.test(module.request)
          )
        }
      }
    }
  }
}

module.exports = clientConfig
