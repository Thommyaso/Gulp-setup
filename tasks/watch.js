const gulp = require('gulp');
const config = require('./config');

gulp.task('watch-all', () => {
  gulp.watch(config.glob.html, gulp.series(
    'html',
    'browserSyncReload'));
  gulp.watch(config.glob.js, gulp.series(
    'eslint',
    'buildJs',
    'browserSyncReload'));
  gulp.watch(config.glob.scss, gulp.series(
    'buildStyles',
    'browserSyncReload'));
  gulp.watch(config.glob.files, gulp.series(
    'copyFiles',
    'browserSyncReload'));
});
