const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const clean = require('gulp-clean-css');
const gulp = require('gulp');


// Development mode css
gulp.task('buildStyles', () => src('./src/sass/main.scss', {sourcemaps: true})
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(concat('main.dev.css'))
  .pipe(dest('dist', {sourcemaps: '.'})));

// Production mode css
gulp.task('buildStyles:prod', () => src('./src/sass/main.scss', {sourcemaps: true})
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(concat('main.prod.min.css'))
  .pipe(clean())
  .pipe(dest('dist', {sourcemaps: '.'})));
