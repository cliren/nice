var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb) {

  runSequence([
      'clean'
    ],
    'webpack',
    'images',
    'mocks',
    'markup',
    'libs',
    'quit');

  cb();
});
