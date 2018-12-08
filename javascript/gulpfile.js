const gulp = require('gulp')
const concat = require('gulp-concat')
// * tirar os espaços em brancos
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    // *poegar todos os arquivos
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .on('error', (err) => {
            console.log('erro')
        })
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})