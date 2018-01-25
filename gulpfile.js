var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: './app'
        },
        port: 4242
    });
});

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('clean', function () {
    return gulp.src('app/dist/', { read: false })
        .pipe(clean());
});

gulp.task('useref', function () {

    return gulp.src('app/*.html')
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(useref())
        .pipe(gulp.dest('dist/'));
});

gulp.task('favicon', function () {
    return gulp.src('app/favicon.ico')
        //.pipe(imagemin())
        .pipe(gulp.dest('dist/'))
});

gulp.task('dev', ['browserSync'], function () {
    gulp.watch('app/js/*.js', browserSync.reload);
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('build', ['sass', 'clean', 'useref', 'favicon'], function () {
    console.log('Building files');
});
