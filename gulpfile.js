const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tasks');

// Main tasks

// Development task
gulp.task('default', gulp.series('buildJs', 'buildStyles', 'html', 'copyFiles', 'browserSyncServe', 'watch-all'));

// Production task
gulp.task('production', gulp.series('clean', 'buildJs:prod', 'buildStyles:prod', 'html', 'copyFiles'));
