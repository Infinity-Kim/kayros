module.exports = () => {
    $.gulp.task('html', () => {
        return $.gulp.src('./src/pages/*.pug')
            .pipe($.glp.plumber({errorHandler: $.glp.notify.onError("Error: <%= error.message %>")}))
            .pipe($.glp.pug({
                pretty: true
            }))
            .pipe($.glp.htmlPrettify({indent_char: ' ', indent_size: 2}))
            //.pipe($.glp.w3cHtmlValidator())
            .pipe($.gulp.dest('./docs'))
            .pipe($.browserSync.reload({ stream: true }))
    });
};
