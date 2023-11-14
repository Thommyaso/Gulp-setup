import {init, reload} from 'browser-sync';
import path from './config.js';

const browsersync = {
  browserSyncServe: cb => {
    init({
      server: {
        baseDir: path.dest.dist,
        middleware: [
          // eslint-disable-next-line no-unused-vars
          (req, res, next) => {
            // Disable caching for all files served by BrowserSync
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
            res.setHeader('Pragma', 'no-cache');
            res.setHeader('Expires', '0');
            res.setHeader('Surrogate-Control', 'no-store');
            next();
          },
        ],
      },
    });
    cb();
  },

  browserSyncReload: cb => {
    reload();
    cb();
  },
};

export default browsersync;
