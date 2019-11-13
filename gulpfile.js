let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass()) // из scss в css
        .pipe(autoprefixer()) //autoprefixer
        .pipe(gulp.dest('./public/css/'));
});
