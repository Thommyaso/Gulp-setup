/* eslint-disable import/no-extraneous-dependencies */
const {
  src, dest, watch, series,
} = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

const browserSync = require('browser-sync');

function minify() {
  return src('./src/**/*.js', { sourcemaps: true })
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
    }))
    .pipe(terser())
    .pipe(dest('./dist', { sourcemaps: '.' }));
}

function buildStyles() {
  return src('./src/sass/main.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(dest('dist', { sourcemaps: '.' }));
}

exports.default = series(minify, buildStyles);
exports.js = minify;
exports.css = buildStyles;

// browser sync:
function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watching() {
  watch('**/*.html', browserSyncReload);
  watch('src/**/*.js', series(minify, browserSyncReload));
  watch('src/**/*.scss', series(buildStyles, browserSyncReload));
}

exports.watch = watching;

exports.serve = series(
  minify,
  buildStyles,
  browserSyncServe,
  watching,
);
