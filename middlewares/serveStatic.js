const mount = require('koa-mount')
const static = require('koa-static')

module.exports = function(url, filePath, opts = {}) {
  return mount(url, static(filePath, opts))
}
