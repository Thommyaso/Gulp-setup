import gulp from 'gulp';
import tasks from './tasks/allTasks/taskLoader.js';

// Main tasks

// Development task
gulp.task('default', gulp.series(
  tasks.util.cleanAll,
  tasks.lint.eslint,
  tasks.javascript.build,
  tasks.css.build,
  tasks.files.copyFiles,
  tasks.html.build,
  tasks.browsersync.browserSyncServe,
  tasks.watch.watchAll));

// Production task
gulp.task('build', gulp.series(
  tasks.util.cleanAll,
  tasks.javascript.buildProd,
  tasks.css.buildProd,
  tasks.html.build,
  tasks.files.copyFiles));
