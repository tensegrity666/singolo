'use srtict';

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

function server() {
  browserSync.init({
    server: 'build',
    notify: false,
    open: false,
    cors: true,
    ui: false
  });
  watch('source/sass/**/*.scss', style);
  watch('source/*.html', series(html, refresh));
};
function style() {
  return src('source/sass/*.scss')
    .pipe(plumber([errorHandler()]))
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('build/css/'))
    .pipe(csso())
    .pipe(gzip())
    .pipe(dest('build/css/'))
    .pipe(browserSync.stream());
};

function lint() {
  return src('source/sass/**/*.scss')
    .pipe(stylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
  }))
};

function clean() {
  return del('build/')
};

function copy() {
  return src([
    'source/img/**',
    'source/js/',
    'source/*.ico',
    'source/fonts/*.woff2'
    ], {
      base: 'source'
    })
    .pipe(dest('build/'));
};

function errorHandler(error) {
  beeper();
  return true;
};

function html() {
  return src('source/*.html')
    .pipe(plumber([errorHandler()]))
    .pipe(posthtml([include()]))
    .pipe(htmlmin())
    .pipe(gzip({
      threshold: true,
      deleteMode: 'build/',
      skipGrowingFiles: true
    }))
    .pipe(dest('build/'));
};

function refresh(done) {
  browserSync.reload();
  done();
};

const build = series(style, html, jsmin, copy);
const start = series(clean, build, server);

function jsmin() {
  return gulp.src('source/js/**/*.js')
    .pipe(plumber([errorHandler()]))
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(gzip({ skipGrowingFiles: true }))
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.stream());
};

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