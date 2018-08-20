const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: isProd
        }
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },

      {
        test: /\.styl(us)?$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader']
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}
