module.exports = () => {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./src/fonts/**/*')
            .pipe($.gulp.dest('./docs/assets/fonts'))
            .pipe($.browserSync.reload({ stream: true }))
    });
};
