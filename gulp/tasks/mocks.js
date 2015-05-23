var gulp = require('gulp');
var config = require('../config').mocks;

gulp.task('mocks', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
