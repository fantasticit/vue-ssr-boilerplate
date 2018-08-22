const mime = require('mime')

module.exports = function() {
  return async (ctx, next) => {
    const url = ctx.request.url
    let ext = url.match(/\.\w+/g)
    ext = (ext && ext.reverse()[0]) || null
    const mimeType = mime.getType(ext) || 'text/html'

    ctx.set(`Content-Type`, `${mimeType}; charset=utf-8`)

    await next()
  }
}
