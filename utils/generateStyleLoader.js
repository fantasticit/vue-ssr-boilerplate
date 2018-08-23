const ServerMiniCssExtractPlugin = require('./miniCSSExtractPlugin')

function getLoader(type) {
  if (type === 'sass' || type === 'scss') {
    return 'sass-loader'
  } else if (type === 'stylus' || type === 'styl') {
    return 'stylus-loader'
  } else {
    // add your css loader here
    return
  }
}

module.exports = function to(
  type,
  opts = {
    isProd: false,
    publicPath: '/'
  }
) {
  return {
    test: new RegExp(`\\.${type}$`),
    use: (opts.isProd
      ? [
          {
            loader: ServerMiniCssExtractPlugin.loader,
            options: {
              publicPath: opts.publicPath
            }
          },
          'css-loader',
          getLoader(type)
        ]
      : ['vue-style-loader', 'css-loader', getLoader(type)]
    ).filter(Boolean)
  }
}
