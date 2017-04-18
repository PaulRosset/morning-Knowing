var gulp = require('gulp');
    sass = require('gulp-sass');
    uglifyCss = require('gulp-minify-css');
    name = require('gulp-rename');
    cleanCSS = require('gulp-clean-css');
    exec = require('child_process').exec;


gulp.task('sass', function() {
    return gulp.src(['assets/scss/*.scss'])
        .pipe(sass())
        .pipe(uglifyCss())
        .pipe(name({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/dist/css/'))
});

gulp.task('clean-css', function() {
    return gulp.src('public/dist/css/*.css')
        .pipe(cleanCSS({debug: true}))
        .pipe(gulp.dest('public/dist/css'));
});

gulp.task('runWebpack', function () {
    exec('npm run webpack', function (err, stdout, stderr) {
        if (stdout) console.log(stdout)
        if (stderr) console.log(stderr)
    })
})

gulp.task('dev', ['sass', 'clean-css', 'runWebpack'], function () {
    gulp.watch('assets/scss/style.scss', ['sass']);
    gulp.watch('public/dist/css/*.css', ['sass']);
    gulp.watch('assets/js/*.js', ['runWebpack']);
});