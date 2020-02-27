const jsFiles = [
  $.path.jquery,
  $.path.js,
];

module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp.src(jsFiles)                                /* принимаемые файлы */
        .pipe($.gp.plumber())                                 /* проаеряем на ошибки */
        .pipe($.gp.sourcemaps.init())                         /* подключаем сорс мепы */
        .pipe($.gp.babel({presets: ['@babel/preset-env']}))   /* этот плагин переписывает ES5 синтаксис в ES6 */
        .pipe($.gp.concat('all.js'))                          /* конкатинация скриптов в один файл */
        .pipe($.gp.uglify())                                  /* минифицирует код */
        .pipe($.gp.rename('all.min.js'))                      /* переименовывает файл */
        .pipe($.gp.sourcemaps.write(''))                      /* записывает сорс мепы в данный файл */
        .pipe($.gulp.dest('build/js'))                        /* размещает файл в папку build/css */
        .pipe($.browserSync.stream());                        /* перезапускает браузер */
  });
};