const gulp = require('gulp')

const { outputJs, outputCss, outputJson, outputImages, outputLib, outputIcon } = require('./tasks/output.js')
const clean = require('./tasks/clean.js')

exports.clean = gulp.series(clean)
exports.default = gulp.series(clean, gulp.parallel(outputJs, outputCss, outputJson, outputImages, outputLib, outputIcon))
