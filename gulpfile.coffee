gulp  = require 'gulp'
gutil = require 'gutil'

gulp.task 'build:js', ->
  gulp.src 'src/*.js'
    .pipe gulp.dest 'dist'

gulp.task 'build', gulp.series('build:js', (cb) ->
  gutil.log('done!')
  cb()
)


