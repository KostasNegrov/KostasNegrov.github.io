module.exports = function () {                       /* создает формат webp */
  $.gulp.task('webp', function () {
    return $.gulp.src('build/img/**/*.{png,jpg}')
        .pipe($.gp.webp({quality: 90}))
        .pipe($.gulp.dest('build/img'));
  });
};