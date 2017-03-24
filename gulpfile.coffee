gulp = require('gulp')
path = require('path')
mocha = require('gulp-mocha')

gulp.task 'tests', ->
  return gulp.src('./test/**/*.test.js', { read: false })
      .pipe mocha({
        ui: 'exports',
        reporter: 'spec'
      })


gulp.task 'default', ['tests']
