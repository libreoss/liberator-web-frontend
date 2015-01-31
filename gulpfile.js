global.gulp = require('gulp');

var webserver = require('gulp-webserver');

/**
 * Create a simple web server that will serve our app during dev phase.
 */

gulp.task('webserver', function setupWebserver() {
  gulp.src('./app/')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('default', ['webserver']);

