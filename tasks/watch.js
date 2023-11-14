import gulp from 'gulp';
import path from './config.js';
import tasks from './allTasks/taskLoader.js';


const watch = {
  watchAll: () => {
    gulp.watch(path.glob.js, gulp.series(
      tasks.util.cleanJs,
      tasks.lint.eslint,
      tasks.javascript.build,
      tasks.html.build,
      tasks.browsersync.browserSyncReload));

    gulp.watch(path.glob.scss, gulp.series(
      tasks.util.cleanCss,
      tasks.css.build,
      tasks.html.build,
      tasks.browsersync.browserSyncReload));

    gulp.watch(path.glob.files, gulp.series(
      tasks.util.cleanFiles,
      tasks.files.copyFiles,
      tasks.browsersync.browserSyncReload
    ));

    gulp.watch(path.glob.html, gulp.series(
      tasks.html.build,
      tasks.browsersync.browserSyncReload));
  },

};

export default watch;
