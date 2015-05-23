var gulp = require('gulp');
var config = require('../config').libs;
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('libs', function() {
  return gulp.src(config.src)
    .pipe(concat('angular-deps.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});