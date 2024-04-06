import inject from 'gulp-inject';
import gulp from 'gulp';
import path from './config.js';

const html = {

  build: () => gulp.src(path.glob.html)
    .pipe(inject(gulp.src([
      `${path.dest.css}/*.css`,
      `${path.dest.js}/*.js`,
    ]), {
      ignorePath: 'dist/',
      addRootSlash: false, // without adding it injected src would not be found by the browser it would be /main.css now is main.css(same for js)
    }))
    .pipe(gulp.dest(path.dest.dist)),
};

export default html;
