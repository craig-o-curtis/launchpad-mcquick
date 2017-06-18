import express from 'express';
import path from 'path';
import open from 'open';
//// es5 way
// var express = require('express');
// var path = require('path');
// var open = require('open');

const port = 3000;
const app = express();
const rootFile = '../src/index.html';

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
