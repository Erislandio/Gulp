const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./GulpTasks/app')
require('./GulpTasks/server')
require('./GulpTasks/deps')


gulp.task('default', () => {
    if (util.env.production) {
        sequence('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor')
    }
})


