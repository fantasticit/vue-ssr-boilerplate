const { VueLoaderPlugin } = require('vue-loader')

const isProd = require('../utils/isProd')
const { resolve } = require('../utils/path')
const ServerMiniCssExtractPlugin = require('../utils/miniCSSExtractPlugin')

module.exports = {
  mode: isProd ? 'production' : 'development',
  output: {
    path: resolve('./dist'),
    publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl(us)?$/,
        use: isProd
          ? [
              {
                loader: ServerMiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/'
                }
              },
              'css-loader',
              'stylus-loader'
            ]
          : ['vue-style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100,
          name: 'static/img/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: isProd
    ? [
        new VueLoaderPlugin(),
        new ServerMiniCssExtractPlugin({
          filename: 'static/css/[name].[chunkhash].css'
        })
      ]
    : [new VueLoaderPlugin()]
}
