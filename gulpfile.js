let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('scss', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass()) // из scss в css
        .pipe(gulp.dest('./public/css/'));
});
