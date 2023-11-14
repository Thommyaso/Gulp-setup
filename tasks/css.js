import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import concat from 'gulp-concat';
import rev from 'gulp-rev';
import path from './config.js';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';

const scss = gulpSass(sass);

const css = {
  // Development mode css
  build: () => gulp.src(path.main.scss, {sourcemaps: true})
    .pipe(scss().on('error', scss.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(concat('main.dev.css'))
    .pipe(rev())
    .pipe(gulp.dest('dist', {sourcemaps: '.'})),

  // Production mode css
  buildProd: () => gulp.src(path.main.scss)
    .pipe(scss().on('error', scss.logError))
    .pipe(postcss([
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(concat('main.prod.min.css'))
    .pipe(rev())
    .pipe(gulp.dest('dist')),
};

export default css;
