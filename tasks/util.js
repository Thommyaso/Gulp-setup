const gulp = require('gulp');
const clean = require('gulp-clean');
const config = require('./config');

gulp.task('clean-all', () => gulp
  .src(`${config.path.dist}*`, {read: false})
  .pipe(clean()));
