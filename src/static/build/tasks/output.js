const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')
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
  gulp.src('../src/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie9' }))
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
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 })
    ]))
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
