import gulp from 'gulp';
import clean from 'gulp-clean';
import path from './config.js';

const util = {
  cleanAll: () => gulp.src(`${path.dest.dist}*`, {read: false})
    .pipe(clean()),

  cleanJs: () => gulp.src(`${path.dest.js}*.js*`, {read: false})
    .pipe(clean()),

  cleanCss: () => gulp.src(`${path.dest.css}*.css*`, {read: false})
    .pipe(clean()),

  cleanFiles: () => gulp.src(path.dest.files, {read: false})
    .pipe(clean()),
};

export default util;
