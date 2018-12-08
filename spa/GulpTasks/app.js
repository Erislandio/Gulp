// ! inicializador  estrutura basica

const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')


gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.imgs'])


gulp.task('app.html', () => {
    return gulp.src('src/**/*.html')
        // remove espacos em branco
        .pipe(htmlmin({ conservativeCollapse: true }))
        .pipe(gulp.dest('build'))
})


gulp.task('app.css', () => {

})



gulp.task('app.js', () => {

})


gulp.task('app.imgs', () => {

})