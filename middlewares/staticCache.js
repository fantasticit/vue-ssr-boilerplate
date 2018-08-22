const fs = require('fs')

module.exports = function(filePath, opts) {
  return async (ctx, next) => {
    // do something with opts

    const data = fs.createReadStream(filePath)
    return (ctx.body = data)
  }
}
