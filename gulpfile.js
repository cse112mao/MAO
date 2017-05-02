var gulp = require('gulp'),
   jshint = require('gulp-jshint'),
    apidoc = require('gulp-apidoc'),
    nightwatch = require('gulp-nightwatch')
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
   gulp.src('test/unit_tests/*.js', {read: false})
      .pipe(mocha({reporter: 'spec'}))
      .once('error', () => {
        process.exit(1);
      })
      //.once('end', () => {
      //  process.exit();
      //})
);

/*
* Run Nightwatch e2e tests
**/
gulp.task('nightwatch', () =>
  gulp.src('test/nightwatch/*.js', {read: false})
    .pipe(nightwatch({configFile: 'nightwatch.conf.BASIC.js'}))
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

gulp.task('default', ['nightwatch', 'lint', 'mocha', 'apidoc']);
