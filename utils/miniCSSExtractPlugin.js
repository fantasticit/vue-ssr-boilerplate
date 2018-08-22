const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/**
 * MiniCssExtractPlugin 在服务端渲染生成 server bundle时，会出现
 * `document is not defined` 错误
 * 解决办法：跳过 `requireEnsure` 钩子，重写 `getCssChunkObject`
 * https://github.com/webpack-contrib/mini-css-extract-plugin/issues/90
 */
module.exports = class ServerMiniCssExtractPlugin extends MiniCssExtractPlugin {
  getCssChunkObject(mainChunk) {
    return {}
  }
}
