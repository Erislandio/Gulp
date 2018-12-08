const gulp = require('gulp');

// Task

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
    // console.log('ok')
})

// ! task de pre requisito
gulp.task('copiar', ['antes1', 'antes2'], () => {
    console.log('copiar')
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        // .pipe(transformacao1())
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

// * pipe vai encadeiar as funções

gulp.task('antes1', () => {
    console.log('antes1')
})


gulp.task('antes2', () => {
    console.log('antes2')
})


gulp.task('fim', () => {
    console.log('fim')
})