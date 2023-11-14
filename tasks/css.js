import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import clean from 'gulp-clean-css';
import rev from 'gulp-rev';
import path from './config.js';

const scss = gulpSass(sass);

const css = {
  // Development mode css
  build: () => gulp.src(path.main.scss, {sourcemaps: true})
    .pipe(scss().on('error', scss.logError))
    .pipe(autoprefixer())
    .pipe(concat('main.dev.css'))
    .pipe(rev())
    .pipe(gulp.dest('dist', {sourcemaps: '.'})),

  // Production mode css
  buildProd: () => gulp.src(path.main.scss)
    .pipe(scss().on('error', scss.logError))
    .pipe(autoprefixer())
    .pipe(concat('main.prod.min.css'))
    .pipe(clean())
    .pipe(rev())
    .pipe(gulp.dest('dist')),
};

export default css;
