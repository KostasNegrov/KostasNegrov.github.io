global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),  /* Этот плагин дает возможность подключать плагины которые начинаются gulp- */
  browserSync: require('browser-sync').create(),  /* Подключаем браузер синк */
  del: require('del'),   /*  */
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  path: {
    config: require('./gulp/config'), /* подключаем файл config.js */
    jquery: './js/jquery.js',         /* подключаем библиотеку */
    js: './js/**/*.js',               /* подключаем файл js */
  }
};

$.path.config.forEach(function (path) {   /* подключаем каждый таск */
  require(path)();
});