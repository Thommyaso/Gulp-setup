import browsersync from '../browsersync.js';
import css from '../css.js';
import lint from '../eslint.js';
import files from '../files.js';
import html from '../html.js';
import javascript from '../javascript.js';
import util from '../util.js';
import watch from '../watch.js';

const tasks = {
  browsersync,
  css,
  lint,
  files,
  html,
  javascript,
  util,
  watch,
};

export default tasks;
