/* eslint-disable import/no-extraneous-dependencies */
const { src, dest, watch } = require('gulp');

const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

const concat = require('gulp-concat');

const terser = require('gulp-terser');

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

exports.watch = function watching() {
  watch('src/*.js', minify);
};

exports.default = minify;
