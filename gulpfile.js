'use strict';
 
const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        cleanCSS = require('gulp-clean-css'),
        autoprefixer = require('gulp-autoprefixer'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        rename = require("gulp-rename"),
        babel = require('gulp-babel');
 
gulp.task('styles', function () {
    return gulp.src('./assets/src/scss/**/*.scss')
    .pipe(sass())
    .on('error', function (err) {
        console.log(err.toString());
        this.emit('end');
    })
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rename(function (path) {
        path.basename += "-min";
    }))
    .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('scripts', function () {
    return gulp.src([
        'assets/src/js/plugins/slider.js',
        'assets/src/js/app.js'
    ])
    .on('error', function (err) {
        console.log(err.toString());
        this.emit('end');
    })
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename(function (path) {
        path.basename += "-min";
    }))
    .pipe(gulp.dest('./assets/dist/js'));
});

gulp.task('default', function() {
    gulp.start(['styles', 'scripts']);

    gulp.watch('./assets/src/scss/**/*.scss', ['styles']);
    gulp.watch('./assets/src/js/**/*.js', ['scripts']);
});