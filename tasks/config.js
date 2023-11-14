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
  main: {
    js: './src/main.js',
    css: './src/sass/main.scss',
  },
  path: {
    css: './dist/',
    js: './dist/',
    dist: './dist/',
    files: './dist/files',
  },
};
