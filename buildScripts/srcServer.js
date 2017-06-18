import express from 'express';
import path from 'path';
import open from 'open';
//// es5 way
// var express = require('express');
// var path = require('path');
// var open = require('open');

import webpack from 'webpack'; // webpack
import webpackConfig from '../webpack.config.dev'; // webpack

const port = 3000;
const app = express();
const rootFile = '../src/index.html';
const compiler = webpack(webpackConfig);// webpack

/* eslint-disable no-console */

// webpack // prep express for webpack
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

// local server
app.get('/', function(req, res){
  res.sendFile( path.join(__dirname, rootFile ) );
});

// listen on port 3000
app.listen(port, function(err) {

  if (err) {
    console.error(err);
    alert('asfsd');
  } else {
    open('http://localhost:' + port);
  }
});
