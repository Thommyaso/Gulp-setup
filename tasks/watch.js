const gulp = require('gulp');
const config = require('./config');

gulp.task('watch-html', () => {
  gulp.watch(config.glob.html, gulp.series('html', 'browserSyncReload'));
});

gulp.task('watch-js', () => {
  gulp.watch(config.glob.js, gulp.series('buildJs', 'browserSyncReload'));
});

gulp.task('watch-css', () => {
  gulp.watch(config.glob.scss, gulp.series('buildStyles', 'browserSyncReload'));
});

gulp.task('watch-all', () => {
  gulp.watch(config.glob.html, gulp.series('html', 'browserSyncReload'));
  gulp.watch(config.glob.js, gulp.series('buildJs', 'browserSyncReload'));
  gulp.watch(config.glob.scss, gulp.series('buildStyles', 'browserSyncReload'));
  gulp.watch(config.glob.files, gulp.series('copyFiles', 'browserSyncReload'));
});
