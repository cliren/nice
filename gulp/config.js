var path = require('path');
var dest = './dist',
  src = './src',
  libs = [
    './bower_components/angular/angular.js',
    './bower_components/angular-route/angular-route.js',
    './bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.js'
  ],
  karmaPath = path.join(__dirname, '../karma.conf.js');

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest]
    },
    files: [
      dest + '/**'
    ],
    open: false
  },
  markup: {
    src: src + "/**/*.html",
    dest: dest
  },
  less: {
    src: src + "/**/*.less",
    dest: dest
  },
  images: {
    src: src + "/**/*.png",
    dest: dest
  },
  karma: karmaPath,
  mocks: {
    src: src + "/**/*.json",
    dest: dest
  },
  js: src + "/**/*.js",
  src: src,
  dest: dest,
  libs: {
    src: libs,
    dest: dest + "/libs"
  }
};
