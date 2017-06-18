var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();
var rootFile = '../src/index.html';

app.get('/', function(req, res){
  res.sendFile( path.join(__dirname, rootFile ) );
});

app.listen(port, function(err) {

  if (err) {
    console.error(err);
  } else {
    open('http://localhost:' + port);
  }
});
