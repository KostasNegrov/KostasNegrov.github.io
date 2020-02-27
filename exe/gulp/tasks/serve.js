module.exports = function () {           /* запускает сервер и устанавливает слежение при изменении файлов */
  $.gulp.task('serve', function () {
    $.browserSync.init({             /* запускает сервер */
      server: 'build/',              /* оттает файлы из этой папки */
      browser: 'Firefox', // закоментить если нужен хром
      notify: false,
    });
                 /* слежение за файлами */
    $.gulp.watch('sass/**/*.sass', $.gulp.series('sass'));
    $.gulp.watch('*.html', $.gulp.series('html'));
    $.gulp.watch('js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('img/**/*.{png,jpg,svg}', $.gulp.series('allimg'));
  });
};