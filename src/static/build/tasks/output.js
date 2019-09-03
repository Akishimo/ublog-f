const gulp = require('gulp')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const babelify = require('babelify')
// const gutil = require('gulp-util')

// const outputJs = (cb) => {
//   gulp.src('../src/gloable.js')
//     .pipe(babel({
//       'presets': ['@babel/preset-env']
//     }))
//     // .on('error', function(err) {
//     //   gutil.log(gutil.colors.red('[Error]'), err.toString());
//     // })
//     .pipe(uglify())
//     .pipe(gulp.dest('../dist'))
//   cb()
// }

const outputJs = (cb) => {
  browserify({
    entries: '../src/gloable.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['@babel/preset-env']
    })]
  }).bundle()
    .pipe(source('./gloable.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
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

const outputIcon = (cb) => {
  gulp.src('../**/*.ico')
    .pipe(gulp.dest('../dist'))
  cb()
}

module.exports = {
  outputJs,
  outputCss,
  outputImages,
  outputJson,
  outputLib,
  outputIcon
}
