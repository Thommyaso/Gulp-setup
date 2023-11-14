import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import loadMaps from 'gulp-sourcemaps';
import flatten from 'gulp-flatten';
import rev from 'gulp-rev';
import path from './config.js';

const javascript = {
  // Development Js
  build: () => browserify({entries: [path.main.js], debug: true})
    .transform(babelify, {presets: ['env']})
    .bundle()
    .pipe(source(path.main.js))
    .pipe(rename({extname: '.dev.js'}))
    .pipe(buffer())
    .pipe(rev())
    .pipe(loadMaps.init({loadMaps: true}))
    .pipe(loadMaps.write('./'))
    .pipe(flatten())
    .pipe(gulp.dest('./dist')),

  // Production Js
  buildProd: () => browserify({entries: [path.main.js], debug: true})
    .transform(babelify, {presets: ['env']})
    .bundle()
    .pipe(source(path.main.js))
    .pipe(rename({extname: '.prod.min.js'}))
    .pipe(buffer())
    .pipe(terser())
    .pipe(flatten())
    .pipe(rev())
    .pipe(gulp.dest('./dist')),
};

export default javascript;
