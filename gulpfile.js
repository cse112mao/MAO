var gulp = require('gulp'),
   jshint = require('gulp-jshint'),
    apidoc = require('gulp-apidoc'),
    mocha = require('gulp-mocha');

/**
* Lint Checker
*/
gulp.task('lint', function () {
   gulp.src('./**/*.js')
      .pipe(jshint())
})

/**
* Run Mocha Tests
**/
gulp.task('mocha', () =>
   gulp.src('test/mocha/*.js', {read: false})
      .pipe(mocha({reporter: 'spec'}))
      .once('error', () => {
        process.exit(1);
      })
      .once('end', () => {
        process.exit();
      })
);

/**
* Run documentation generator
*/
gulp.task('apidoc', function(done){
   apidoc({
      src: "views/hw2/",
      dest: "doc/"
   }, done);
});

gulp.task('default', ['lint', 'mocha', 'apidoc']);
