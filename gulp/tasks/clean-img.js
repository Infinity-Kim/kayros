module.exports = () => {
    $.gulp.task('clean-img', () => {
        return $.del('./src/img/**/*.*');
    });
};
