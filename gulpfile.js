'Use srtict';

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const beeper = require('beeper');
const stylelint = require('gulp-stylelint');
const browserSync = require('browser-sync').create();
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const del = require('del');
const concat = require('gulp-concat');
const gzip = require('gulp-gzip');
const imagemin = require('gulp-imagemin');
const sourcemap = require('gulp-sourcemaps');
const terser = require('gulp-terser');

function server() {
  browserSync.init({
    server: 'build/',
    notify: false,
    open: false,
    cors: true,
    ui: false
  });
  watch('source/sass/**/*.scss', style);
  watch('source/*.html', series(html, refresh));
}

function style() {
  return src('source/sass/*.scss')
    .pipe(plumber([errorHandler()]))
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('build/css/'))
    .pipe(csso())
    .pipe(sourcemap.write('.'))
    .pipe(dest('build/css/'))
    .pipe(browserSync.stream());
}

function image() {
  return src('source/assets/images/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest('source/assets/images/'));
}

function lint() {
  return src('source/sass/**/*.scss')
    .pipe(stylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
  }))
}

function clean() {
  return del('build/')
}

function copy() {
  return src([
    'source/assets/images/**/*.{png,jpg,svg}',
    'source/assets/*.ico',
    'source/assets/fonts/*.woff2'
    ], {
      base: 'source'
    })
    .pipe(dest('build/'));
}

function errorHandler(error) {
  beeper();
  return true;
}

function html() {
  return src('source/*.html')
    .pipe(plumber([errorHandler()]))
    .pipe(posthtml([include()]))
    .pipe(htmlmin())
    .pipe(dest('build/'));
}

// .pipe(gzip({
//     //   threshold: true,
//     //   deleteMode: 'build/',
//     //   skipGrowingFiles: true
//     // }))

function refresh(done) {
  browserSync.reload();
  done();
}

function jsmin() {
  return src('source/scripts/**/*.js')
    .pipe(plumber([errorHandler()]))
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(dest('build/scripts/'))
    .pipe(browserSync.stream());
}

const build = series(style, html, copy);
const start = series(clean, build, server);

exports.style = style;
exports.lint = lint;
exports.html = html;
exports.server = server;
exports.refresh = refresh;
exports.clean = clean;
exports.copy = copy;
exports.build = build;
exports.start = start;
exports.jsmin = jsmin;
exports.image = image;