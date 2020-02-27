module.exports = function () {        /* этот таск копирует все файлы в папку build */
  $.gulp.task('copy', function () {
    return $.gulp.src([
        'fonts/**/*.{woff,woff2}',    /* шрифты */
        'img/**',                     /* изображения */
        '*.html'                      /* html */
    ], {
      base: '.'                       /* указываем откуда это все берется */
    })
        .pipe($.gulp.dest('build'));  /*  перемещает в папку build*/
  });
};