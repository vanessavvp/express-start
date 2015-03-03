var gulp    = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', ['server']);

gulp.task('server', function () {
  return gulp.src('').pipe(shell([ 'node app.js' ]));
});

gulp.task('put', function() {
  return gulp.src('').pipe(shell(["curl -X PUT -v localhost:3000/user"]));
});

gulp.task('delete', function() {
  return gulp.src('').pipe(shell("curl -X DELETE -v localhost:3000/user"));
});

gulp.task('post', function() {
  return gulp.src('').pipe(shell("curl -X POST -v -d 'ignored data' localhost:3000"));
});
