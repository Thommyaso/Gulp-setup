module.exports = {
  glob: {
    scss: './src/**/*.scss',
    js: './src/**/*.js',
    html: './src/**/*.html',
    files: './src/files/**/*.*',
  },
  entryPoint: {
    scss: './src/index.scss',
  },
  path: {
    css: './dist/',
    js: './dist/',
    dist: './dist/',
    delete: './dist/**.dev.*',
    files: './dist/files',
  },
};
