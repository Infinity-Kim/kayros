module.exports = () => {
    $.gulp.task('clean-fonts', () => {
        return $.del('./src/fonts/**/*');
    });
};
