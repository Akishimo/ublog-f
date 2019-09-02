const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
// const gutil = require('gulp-util')

const outputJs = (cb) => {
  gulp.src('../src/gloable.js')
    .pipe(babel({
      'presets': ['@babel/preset-env']
    }))
    // .on('error', function(err) {
    //   gutil.log(gutil.colors.red('[Error]'), err.toString());
    // })
    .pipe(uglify())
    .pipe(gulp.dest('../dist'))
  cb()
}

const outputCss = (cb) => {
  gulp.src('../src/gloable.css')
    .pipe(gulp.dest('../dist'))
  cb()
}

const outputJson = (cb) => {
  gulp.src('../src/particles.json')
    .pipe(gulp.dest('../dist'))
  cb()
}

const outputImages = (cb) => {
  gulp.src('../images/**/*', { base: '../' })
    .pipe(gulp.dest('../dist'))
  cb()
}

const outputLib = (cb) => {
  gulp.src('../lib/**/*', { base: '../' })
    .pipe(gulp.dest('../dist'))
  cb()
}

module.exports = {
  outputJs,
  outputCss,
  outputImages,
  outputJson,
  outputLib
}