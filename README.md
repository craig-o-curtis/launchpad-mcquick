# Launchpad McQuick 
This is a starter kit. 
This is a development environment.
This is a boilerplate.
This is a seed.
This is a starter project.
These are all synymns.

// package.json inspired by and tweaked from bit.ly/jsdevpackagejson
$ npm install

Duck Flavour Chosen:
* VS Code, npm, Express, localtunnel

$ npm start
$ npm run myshare // see at https://launchpad.localtunnel.me

## Cool Goodies!

Node Security Platform 
https://nodesecurity.io/

$ npm install -g babel-cli nsp
$ nsp check

Gulp users:
$ npm install gulp-nsp --save-dev

Grunt users:
$ npm install grunt-nsp --save-dev

VS Code Users:
$ ext install vscode-nsp

### Use on npm start
-- but need to be online


## Starting a Project Notes:
Considerations: 
1. Browsers: IE, Firefox, Chrome, Safari, Opera
2. Server: Node, Express, Java, PHP, etc
3. Mobile: NativeScript, PhoneGap, Electron
4. Desktop: Electron

What Belongs in a Starter Kit?
* Package management
* Bundling
* Minification
* Sourcemaps
* Transpiling
* Dynamic HTML Generation
* Centralized HTTP
* Mock API framework
* Component libraries
* Development Webserver
* Linting
* Automated testing
* Continuous integration
* Automated build
* Automated deployment
* Working example

This Project
* Source Control: Github
* Package Management: npm
* Automated Deployment: Heroku
* Server: Express.js

## IDE

Questions: 
1. Strong ES6 support?
  - autocompletion?
  - parse ES6 imports?
  - report unused imports?
  - automated refactoring?
** Built-in terminal? 

Options:
1. Atom - plugin for built-in terminal
2. Webstorm - not free
3. Brackets
4. ** VS Code ** CHOICE


### IDE configuration
* .editorconfig file


## Package Manager

Options: 
1. Bower
  - irrelevant now
2. ** npm ** CHOSEN
  + One place for all packages
  + choice of tne angularx team
  ++ it is the defacto standard for package managers now
3. JSPM
  + does also bundle code ...
4. Jam
5. volo


## Development Web Servers

Options:
1. http-server
 + simplest
 - no live reloading
 - only statc files

2. live-server
 + live reloading
 - only static files

3. ** Express ** Chosen
 + better features
 + can serve up Node api
 + can use in prod too
 >> Competitors: Koa, Hapi
 - overkill if using Java, Ruby, Python

4. budo
+ Integrates with Browserify
+ hot reloading - immediate changes in browser w/o save

5. Webpack dev server
+ built-in if using Webpack
+ serves from memory - doesn't generate a physical file
+ hot reloading

6. Browsersync
++ Sets up dedicated IP for sharing work on LAN 
++ All devices remain in sync +++ for browser and device testing
++ Can use with Webpack, Browserify, Gulp, Express
https://github.com/BrowserSync/recipes
$ npm install -g browser-sync

### Configuring Express
```
// buildScripts/srcServer.js
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
```


Sharing Progress Options:
*** Share progress with customers for FREE!
1. localtunnel  ** CHOSEN **
+ Easiest
+ Expose localhost to a public URL
** punches a hole in your firewall

Global Setup
  // terminal
  1. $ npm install localtunnel -g
  2. $ node buildScripts/srcServer.js
  
  // terminal 2
  3. $ lt --port 3000 // pass port of local server, returns random url 
  OR 3. $ lt --port 3000 --subdomain projectname // has specified subdomain name

Local Setup 




2. ngrok
+ Also punches hole in firewall
* Requires additional setup
- Sign up, install, install authtoken, start app, ./ngrok http 80
+ password protected access


3. Surge
+ very simple, no firewall hole punching
- for static HTML CSS JS files
  1. $ npm install -g surge
  2. $ surge


4. now
https://zeit.co/now
+ No firewall punching, deploys to cloud
+ each time, unique URL
+ More permanent - don't need to keep machine on
  1. $ npm install -g now
  2. create start script
  3. $ now
 

### Setup

## Automation
1. Grunt
+ config over vode
+ the original, more packags

2. Gulp
+ code over config
+ faster than Grunt
+ more configuration options / customizable

3. npm ** chosen
+ The chosen one today
+ cross-platform friendly
+ world's largest package manager
+ no depenedence on plugin authors, uses Node directly

** npm scripts: pre, , post
- pre... run before ... command
- post... run before ... command
ex: prestart, start, poststart


$ npm start -s // silent mode -- without all of noise in console 

## Transpiling
1. Babel ** CHOSEN **
+ Can even use experimental features now

Node & Electron Presets:
** babel-preset-es2015-node --- version detection
** babel-preset-latest-minimal -- feature detection

Use babel-node to run ES6 node


2. Typescript
+ type safety
- some plugins / packages may not work -- 1st gen React
- requires type definitions


3. Elm
+ it isn't javascript - clean syntax
+ immutable data structures
+ no runtime errors
- learning curve
- everything is functional


### Babel Setup
.babelrc file





## Bundling
1. Browserify
2. Webpack
3. Rollup
4. JSPM

## Linting
1. JSLint
2. JSHint
3. ESLint

## Unit Testing and Continuous Integration

### Decisions
1. Framework
2. Assertion Library
3. Helper Libraries
4. Where to run tests
5. Where to place tests
6. When to run tests

Testing 
1. Mocha
2. Jasmine
3. Tape
4. QUnit
5. AVA
6. Jest

Continuous Integration
1. Travis
2. Appveyor
3. Jenkins
4. CircleCI
5. Semaphore
6. SnapCI


## HTTP Call Approaches

Node        Browser           Node & Browser
* http      XMLHttpRequest    isomorphic-fetch
* request   jQuery            xhr
*           Fetch             SuperAgent
*                             Axios


## Production Build
1. Hard coded
2. Manipulate via Node
3. html-webpack-plugin

* minify
* bundle
* flush cache
* error logging

## Automated deployment process
1. npm start
2. npm run build
3. npm run deploy

Deploy to Options:
* AWS
* Azure
* Heroku
* Firebase
* Google CloudPlatform
* Pubstorm
* Github
* Surge


## Starter Kit Update Approaches
1. Yeoman
2. Github
3. npm

### CHANGE
Add name of this app and change package.json with the flavours chosen for this Launchpad McQui ck














