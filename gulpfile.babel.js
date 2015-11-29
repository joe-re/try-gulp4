const gulp = require('gulp');
const customTask = require('./custom_registory.babel.js');

gulp.registry(customTask);

function functionalTask(cb) {
  console.log('functionalTask done!');
  cb();
}

gulp.task(functionalTask);

gulp.task('task:first', (cb) => {
  console.log('task:first done!');
  cb();
});

gulp.task('task:second', (cb) => {
  setTimeout(() => {
    console.log('task:second done!');
    cb();
  }, 1000);
});

gulp.task('task:third', (cb) => {
  console.log('task:third done!');
  cb();
});

gulp.task('task:composing',
  gulp.series(
    gulp.parallel('task:first', 'task:second', 'task:third'),
    (cb) => {
      console.log('task:composing done');
      cb();
    }
  )
);

gulp.task('tree', (cb) => {
  console.log(gulp.tree({ deep: true }));
  cb();
});

gulp.task('make:symlink', () =>
  gulp.src('./src/test.js').
    pipe(gulp.symlink('dist', { dirMode: 0o777 }))
);

