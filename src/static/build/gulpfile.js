const gulp = require('gulp')

const { outputJs, outputCss, outputJson, outputImages, outputLib, outputIcon } = require('./tasks/output.js')
const clean = require('./tasks/clean.js')

exports.clean = gulp.series(clean)
exports.default = gulp.series(clean, outputJs, outputCss, gulp.parallel(outputJson, outputImages, outputLib, outputIcon))
