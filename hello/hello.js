var express = require('express')
var express = require('express')
var app = express()
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index', { title: 'Express' });
})

/*
 var router = express.Router();
  module.exports = router; 
*/
app.get('/chuchu', function (req, res) {
  //res.send('Hello Chuchu!')
  res.render('index', { title: 'Chuchu' });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
