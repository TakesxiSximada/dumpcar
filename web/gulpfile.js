const gulp = require('gulp');
const jade = require('gulp-jade');
const watch = require('gulp-watch');
const stylus = require('gulp-stylus');
const webserver = require('gulp-webserver');


gulp.task('stylus', () => {
    return gulp.src([
        './pages/**/*.styl',
        '!./pages/**/_*.styl',
    ]).pipe(
        stylus()
    ).pipe(
        gulp.dest('./dist')
    )
});


gulp.task('jade', () => {
    return gulp.src([
        './pages/**/*.jade',
        '!./pages/**/_*.jade',
    ]).pipe(
        jade({
            pretty: true
        })
    ).pipe(
        gulp.dest('./dist')
    )
});

gulp.task('watch', () => {
    watch([
        './pages/**/*.jade',
        './pages/**/*.styl',
    ], () => {
        gulp.start('jade');
        gulp.start('stylus');
    });
});

gulp.task('webserver', () => {
    gulp.src('dist').pipe(
        webserver({
            open: true,
            livereload: true,
        })
    );
});
