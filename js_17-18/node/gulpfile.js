'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

var path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/'
        },
        src: { //Пути откуда брать исходники
            js: 'js/*.js',//В стилях и скриптах нам понадобятся только main файлы
            style: 'css/*.css',
            img: 'img/*.*'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            js: 'js/*.js',
            style: 'css/*.css'
        },
        clean: './build'
    };
    gulp.task('js', function () {
      gulp.src(path.src.js)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(path.build.js)); //Выплюнем готовый файл в build
    });

    gulp.task('style', function () {
      gulp.src(path.src.style)
        .pipe(concat('styles.min.css'))
        //.pipe(autoprefixer()) //Добавим префиксы
        .pipe(cssnano()) //Сожмем
        .pipe(gulp.dest(path.build.css)); //И в build
    });

    gulp.task('img', function () {
      gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img));
});
