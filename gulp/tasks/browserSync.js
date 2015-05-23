var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config').browserSync;

gulp.task('browserSync', ['webpack', 'markup', 'images', 'mocks'], function()
{
    browserSync(config);
});

var proxyMiddleware = require('http-proxy-middleware');
var proxyURL = 'http://localhost:8080';

gulp.task('browserSync', ['webpack', 'markup'], function()
{
    var proxy = proxyMiddleware('/api', {target: proxyURL});

    config.server.middleware = [proxy];

    browserSync(config);
});
