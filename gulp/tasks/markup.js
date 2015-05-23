var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var config = require('../config').markup;

gulp.task('markup', function() {
  var opts = {
    conditionals: true,
    spare: true
  };

  return gulp.src(config.src)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(config.dest));
});