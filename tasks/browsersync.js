const browserSync = require('browser-sync');
const gulp = require('gulp');

gulp.task('browserSyncServe', (cb) => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
  cb();
});

gulp.task('browserSyncReload', (cb) => {
  browserSync.reload();
  cb();
});
