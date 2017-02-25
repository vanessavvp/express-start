var gulp    = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', ['server']);

// npm install supervisor -g
gulp.task('server', shell.task([ 'nodemon app.js' ]));

gulp.task('put', 
  shell.task(["curl -X PUT -v localhost:3000/user"]));


gulp.task('delete', 
  shell.task("curl -X DELETE -v localhost:3000/user"));


gulp.task('post', 
  shell.task("curl -X POST -v -d 'ignored data' localhost:3000"));


gulp.task('put', 
  shell.task(["curl -X PUT -v localhost:3000/user"]));


gulp.task('secretdelete', 
  shell.task("curl -X DELETE -v localhost:3000/secret"));


gulp.task('secretpost', 
  shell.task("curl -X POST -v -d 'ignored data' localhost:3000/secret"));


gulp.task('cookie', 
  shell.task("curl -i -v -H -D --cookie chuchu=4 localhost:3000/usuario/casiano"));


var del = require('del');
gulp.task('clean', function(cb) {
  del(['node_modules/*'], cb);
});
