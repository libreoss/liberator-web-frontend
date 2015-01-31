var path = require('path');

var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

global.gulp = require('gulp');
global.liberatorPaths = {
  app: path.resolve('./app'),
  sass: path.resolve('./app/sass/'),
  sassGlob: path.resolve('./app/*.scss'),
  css: path.resolve('./app/css')
};

/**
 * Create a simple web server that will serve our app during dev phase.
 */

gulp.task('webserver', ['sass', 'watch'], function setupWebserver() {
  gulp.src(liberatorPaths.app)
    .pipe(webserver({
      livereload: true
    }));
});

/**
 * Uses libsass to compile sass to css files
 */

gulp.task('sass', function compileStylesheets() {
  gulp.src(liberatorPaths.sassGlob)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer(['last 2 versions']))
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(gulp.dest(liberatorPaths.css));
});

gulp.task('watch', function initWatchers() {
  gulp.watch(liberatorPaths.sassGlob, ['sass']);
});

gulp.task('default', ['webserver']);

