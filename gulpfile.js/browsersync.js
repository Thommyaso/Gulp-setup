// eslint-disable-next-line import/no-extraneous-dependencies
const browserSync = require('browser-sync');

function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

module.exports = {
  browserSyncServe,
  browserSyncReload,
};
