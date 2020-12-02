module.exports = () => {
    $.gulp.task('img', () => {
        return $.gulp.src('./src/img/**/*.{png,jpg,jpeg}')
            .pipe($.glp.tinypngCompress({
                key: '6iVRXZHUBbke5ewqeBiEEz4M51UIa0zp', // ключик менять на свой
                summarize: true,
                log: true
            }))
            .pipe($.gulp.dest('./docs/assets/img'))
    });
};
