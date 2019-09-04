const gulp = require('gulp')

const { outputJs, outputLessForDev, outputLess, outputJson, outputImages, outputLib, outputIcon } = require('./tasks/output.js')
const clean = require('./tasks/clean.js')

exports.clean = gulp.series(clean)
exports.devless = gulp.series(outputLessForDev)
exports.default = gulp.series(clean, outputJs, outputLess, gulp.parallel(outputJson, outputImages, outputLib, outputIcon))
