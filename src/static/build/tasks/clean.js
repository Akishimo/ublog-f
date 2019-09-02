const del = require('del')

const cleanDir = (cb) => {
  return del([
    '../dist'
  ], {
    force: true
  })
}

module.exports = cleanDir
