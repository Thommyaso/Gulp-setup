import gulp from 'gulp';
import path from './config.js';

const files = {
  copyFiles: () => gulp.src(path.glob.files)
    .pipe(gulp.dest(path.dest.files)),
};

export default files;
