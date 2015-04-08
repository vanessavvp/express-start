var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req,res,next) { 
  if(Math.random() <= 0.5) return next(); 
  console.log('sometimes this');
  res.send('sometimes this');
});

app.get('/', function(req,res){
  console.log('and sometimes that');
  res.send('and sometimes that');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

