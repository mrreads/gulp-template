let gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uncss = require('gulp-uncss'),
    csscomb = require('gulp-csscomb'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    imageminPngquant = require('imagemin-pngquant'), // PNG
    imageminMozjpeg = require('imagemin-mozjpeg'), // JPEG
    imageminWebp = require('imagemin-webp'), // WEBP
    imageminGifsicle = require('imagemin-gifsicle'), // GIF
    imageminSvgo = require('imagemin-svgo'), // SVG
    browserSync = require('browser-sync');

gulp.task('clean', () => {
    return gulp.src('./public/*', { read: false })
        .pipe(clean());
});

gulp.task('move', () => {
    return gulp.src('./src/**/*.{html,php}')
        .pipe(gulp.dest('./public/')),
    gulp.src('./src/audio/*')
        .pipe(gulp.dest('./public/audio/')),
    gulp.src('./src/css/**/*.css')
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./public/css/')),
    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./public/fonts/')),
    gulp.src('./src/php/*')
        .pipe(gulp.dest('./public/php/')),
    gulp.src('./src/sql/**/*.sql')
        .pipe(gulp.dest('./public/sql/'));
});

gulp.task('html', () => {
    return gulp.src('./src/**/*.{html,php}')
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('css', () => {
    return gulp.src('./src/scss/**/*.{scss,sass}')
        .pipe(sass())
        //.pipe(uncss({ html: ['./src/**/*.html'] }))
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./public/css/'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', () => {
    return gulp.src('./src/js/**/*.js')
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(gulp.dest('./public/js/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('img', () => {
    return gulp.src('./src/img/*')
    .pipe(imagemin([
        imageminPngquant({quality: [0.5, 0.5]}),
        imageminMozjpeg({quality: 50}),
        imageminWebp({quality: 50}),
        imageminGifsicle({optimizationLevel: 1}),
        imageminSvgo({ plugins: [{removeViewBox: false}] })
      ]))
    .pipe(gulp.dest('./public/img/'));
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: { baseDir: "./src/" },
        notify: false
    });
});

gulp.task('watch', () => {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
    gulp.watch('./src/**/*.html', gulp.parallel('html'));
    gulp.watch('./src/**/*.js', gulp.parallel('js'));
});

gulp.task('start', gulp.parallel('browser-sync', 'watch'));
gulp.task('build', gulp.parallel('clean', 'move', 'css', 'js', 'img'));