/* eslint-disable import/no-extraneous-dependencies */
const { watch, series } = require('gulp');

const { minify } = require('./javascript');
const { buildStyles } = require('./css');
const { browserSyncServe, browserSyncReload } = require('./browsersync');

function watching() {
  watch('**/*.html', browserSyncReload);
  watch('src/**/*.js', series(minify, browserSyncReload));
  watch('src/**/*.scss', series(buildStyles, browserSyncReload));
}

exports.default = series(minify, buildStyles);
exports.js = minify;
exports.css = buildStyles;

exports.watch = watching;

exports.serve = series(
  minify,
  buildStyles,
  browserSyncServe,
  watching,
);
