/* eslint-disable import/no-extraneous-dependencies */
const { watch, series } = require('gulp');

const { buildStyles } = require('./css');
const { browserSyncServe, browserSyncReload } = require('./browsersync');
const { workJs } = require('./javascript');

function watching() {
  watch('**/*.html', browserSyncReload);
  watch('src/**/*.js', series(workJs, browserSyncReload));
  watch('src/**/*.scss', series(buildStyles, browserSyncReload));
}

exports.default = series(workJs, buildStyles);

exports.serve = series(
  workJs,
  buildStyles,
  browserSyncServe,
  watching,
);

exports.js = workJs;
exports.css = buildStyles;
exports.watch = watching;
