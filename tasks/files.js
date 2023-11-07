const gulp = require('gulp');
const config = require('./config');

gulp.task('copyFiles', () => gulp.src(config.glob.files)
  .pipe(gulp.dest(config.path.files)));
