const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tasks');

// Main tasks

// Development task
gulp.task('default', gulp.series(
  'clean-all',
  'eslint',
  'buildJs',
  'buildStyles',
  'copyFiles',
  'html',
  'browserSyncServe',
  'watch-all'));

// Production task
gulp.task('build', gulp.series(
  'clean-all',
  'buildJs:prod',
  'buildStyles:prod',
  'copyFiles',
  'html'
));
