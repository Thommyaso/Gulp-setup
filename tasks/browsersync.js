const browserSync = require('browser-sync');
const gulp = require('gulp');
const config = require('./config');

gulp.task('browserSyncServe', cb => {
  browserSync.init({
    server: {
      baseDir: config.path.dist,
    },
  });
  cb();
});

gulp.task('browserSyncReload', cb => {
  browserSync.reload();
  cb();
});
