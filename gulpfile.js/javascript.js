/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');

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

module.exports = {
  minify,
};
