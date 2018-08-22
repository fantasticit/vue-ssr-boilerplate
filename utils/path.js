const path = require('path')

exports.resolve = function(filePath) {
  return path.resolve(__dirname, '../', filePath)
}
