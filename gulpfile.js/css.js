/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const clean = require('gulp-clean-css');

function buildStyles() {
  return src('./src/sass/main.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(clean())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

module.exports = {
  buildStyles,
};
