var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['libs', 'images', 'browserSync'], function() {
  gulp.watch([config.js, config.less.src], ['webpack']);
  gulp.watch(config.markup.src, ['markup']);
});
