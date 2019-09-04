const gulp = require('gulp')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const babelify = require('babelify')
const rev = require('gulp-rev')
const less = require('gulp-less')

const { BUILD } = require('../../../../config/index.js')

const manifestName = BUILD.STATIC_MANIFEST_FILENAME
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
  const handleJsStream = (stream) => {
    const isSourcemap = process.env.SOURCEMAP === 'true'
    if (isSourcemap) {
      stream = stream.pipe(sourcemaps.init({ loadMaps: true }))
    }
    stream = stream.pipe(uglify())
      .pipe(rev())
      .pipe(gulp.dest('../dist'))
    if (isSourcemap) {
      stream = stream.pipe(sourcemaps.write('./')).pipe(gulp.dest('../dist'))
    }
    stream = stream.pipe(rev.manifest({ path: `../dist/${manifestName}`, merge: true }))
      .pipe(gulp.dest('../dist'))
    return stream
  }

  handleJsStream(browserify({
    entries: '../src/gloable.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['@babel/preset-env']
    })]
  }).bundle()
    .pipe(source('./gloable.js'))
    .pipe(buffer()))
    .pipe(gulp.dest('../dist'))
  cb()
}

const outputLess = (cb) => {
  gulp.src('../src/less/gloable.less')
    .pipe(less())
    .pipe(cleanCSS({ compatibility: 'ie9' }))
    .pipe(rev())
    .pipe(gulp.dest('../dist'))
    .pipe(rev.manifest({ path: `../dist/${manifestName}`, merge: true }))
    .pipe(gulp.dest('../dist'))
  cb()
}

const outputLessForDev = (cb) => {
  if (process.env.WATCH === 'true') {
    gulp.watch('../src/less/**/*.less', (cb) => {
      gulp.src('../src/less/gloable.less')
        .pipe(less())
        .pipe(gulp.dest('../src'))
    })
  } else {
    gulp.src('../src/less/gloable.less')
    .pipe(less())
    .pipe(gulp.dest('../src'))
  }
  cb()
}

const outputCss = (cb) => {
  gulp.src('../src/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie9' }))
    .pipe(rev())
    .pipe(gulp.dest('../dist'))
    .pipe(rev.manifest({ path: `../dist/${manifestName}`, merge: true }))
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
  outputLess,
  outputImages,
  outputJson,
  outputLib,
  outputIcon,
  outputLessForDev
}
