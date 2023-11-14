const {dest} = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const src = require('gulp-sourcemaps');
const flatten = require('gulp-flatten');
const gulp = require('gulp');
const config = require('./config');

// Development Js
gulp.task('buildJs', () => browserify({entries: [config.main.js], debug: true})
  .transform(babelify, {presets: ['env']})
  .bundle()
  .pipe(source(config.main.js))
  .pipe(rename({extname: '.dev.js'}))
  .pipe(buffer())
  .pipe(src.init({loadMaps: true}))
  .pipe(src.write('./'))
  .pipe(flatten())
  .pipe(dest('./dist')));

// Production Js
gulp.task('buildJs:prod', () => browserify({entries: [config.main.js], debug: true})
  .transform(babelify, {presets: ['env']})
  .bundle()
  .pipe(source(config.main.js))
  .pipe(rename({extname: '.prod.min.js'}))
  .pipe(buffer())
  .pipe(terser())
  .pipe(src.write('./'))
  .pipe(flatten())
  .pipe(dest('./dist')));
