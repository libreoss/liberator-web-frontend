var path = require('path');

global.gulp = require('gulp');
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


global.liberatorPaths = {
  app: path.resolve('./app'),
  css: path.resolve('./app/css'),
  jsGlob: path.resolve('./app/scripts/**/*.js'),
  jsEntry: path.resolve('./app/scripts/app.js')
};

/**
 * Create a simple web server that will serve our app during dev phase.
 */

gulp.task('webserver', ['javascript', 'watch'], function setupWebserver() {
  gulp.src(liberatorPaths.app)
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      port: 9000
    }));
});

gulp.task('javascript', function() {

  var bundler = browserify({
    entries: [liberatorPaths.jsEntry],
    debug: true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source('liberator.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./app/dist/'));
  };

  return bundle();
});

/**
 * Uses libsass to compile sass to css files
 */

gulp.task('watch', function initWatchers() {
  gulp.watch(liberatorPaths.jsGlob, ['javascript']);
});

gulp.task('default', ['webserver']);
