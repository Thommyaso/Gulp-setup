const gulp = require('gulp');
const eslint = require('gulp-eslint');
const config = require('./config');

gulp.task('eslint', () => gulp.src([config.glob.js])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));
