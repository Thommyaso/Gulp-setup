import gulp from 'gulp';
import eslint from 'gulp-eslint';
import path from './config.js';

const lint = {
  eslint: () => gulp.src([path.glob.js])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()),
};

export default lint;
