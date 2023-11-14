const path = {
  glob: {
    scss: './src/**/*.scss',
    js: './src/**/*.js',
    html: './src/**/*.html',
    files: './src/files/**/*.*',
  },
  main: {
    scss: './src/sass/main.scss',
    js: './src/main.js',
  },
  entryPoint: {
    scss: './src/index.scss',
  },
  dest: {
    css: './dist/',
    js: './dist/',
    dist: './dist/',
    files: './dist/files',
  },
};

export default path;
