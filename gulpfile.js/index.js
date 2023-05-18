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

function minify() {
  return src('./src/**/*.js')
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
    .pipe(dest('./dist'));
}

function buildStyles() {
  return src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(dest('dist'));
}

exports.default = series(minify, buildStyles);
exports.js = minify;
exports.css = buildStyles;

exports.watch = function watching() {
  watch('src/*.js', minify);
  watch('src/**/*scss', buildStyles);
};
