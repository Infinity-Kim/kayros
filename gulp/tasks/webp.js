module.exports = () => {
    $.gulp.task('webp', () => {
        return $.gulp.src('./src/img/**/*.{png,jpg,jpeg}')
            .pipe($.glp.webp())
            .pipe($.gulp.dest('./docs/assets/img'))
            .pipe($.browserSync.reload({ stream: true }))
    });
};
