gulp  = require 'gulp'
gutil = require 'gutil'

gulp.task 'build', ['build:js'], ->
  gutil.log('done!')

gulp.task 'build:js', ->
  gulp.src 'src/*.js'
    .pipe gulp.dest 'dist'


