/* eslint-disable import/no-extraneous-dependencies */

const { dest } = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const src = require('gulp-sourcemaps');
const flatten = require('gulp-flatten');

const entry = './src/main.js';

function workJs() {
  return browserify({ entries: [entry], debug: true })
    .transform(babelify, { presets: ['env'] })
    .bundle()
    .pipe(source(entry))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(buffer())
    .pipe(src.init({ loadMaps: true }))
    .pipe(terser())
    .pipe(src.write('./'))
    .pipe(flatten())
    .pipe(dest('./dist'));
}

module.exports = { workJs };
