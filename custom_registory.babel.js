'use strict';

const gulp            = require('gulp');
const DefaultRegistry = require('undertaker-registry');

class MyCustomTask extends DefaultRegistry {
  init() {
    gulp.task('task:custom', (cb) => {
      console.log('task:custom done!');
      cb();
    });
  }
};

module.exports = new MyCustomTask();
