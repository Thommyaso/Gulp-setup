const inject = require('gulp-inject');
const gulp = require('gulp');
const config = require('./config');

gulp.task('html', () => gulp.src(config.glob.html)
  .pipe(inject(gulp.src([
    `${config.path.css}/*.css`,
    `${config.path.js}/*.js`,
  ]), {
    ignorePath: 'dist/',
    addRootSlash: false, // without adding it injected src would not be found by the browser it would be /main.css now is main.css(same for js)
  }))
  .pipe(gulp.dest(config.path.dist)));
