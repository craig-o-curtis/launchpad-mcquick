# Launchpad McQuick 
This is a starter kit. 
This is a development environment.
This is a boilerplate.
This is a seed.
This is a starter project.
These are all synymns.

// package.json inspired by and tweaked from bit.ly/jsdevpackagejson
```bash
$ npm install
```

Duck Flavour Chosen:
* VS Code, npm, Express, localtunnel, Babel, Webpack

```bash
$ npm start
$ npm run myshare // see at https://launchpad.localtunnel.me
```

## Cool Goodies!

Node Security Platform 
https://nodesecurity.io/

```bash
$ npm install -g babel-cli nsp
$ nsp check
```

Also version for Gulp and Grunt
*** But this setup uses npm only


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
```js
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
  ```bash
  npm install localtunnel -g
  node buildScripts/srcServer.js
  ```

  // terminal 2
  ```bash
  $ lt --port 3000 // pass port of local server, returns random url 
  $ lt --port 3000 --subdomain projectname // has specified subdomain name
  ```

Local Setup 




2. ngrok
+ Also punches hole in firewall
* Requires additional setup
- Sign up, install, install authtoken, start app, ./ngrok http 80
+ password protected access


3. Surge
+ very simple, no firewall hole punching
- for static HTML CSS JS files
  ```bash
  $ npm install -g surge
  $ surge
  ```


4. now
https://zeit.co/now
+ No firewall punching, deploys to cloud
+ each time, unique URL
+ More permanent - don't need to keep machine on
  ```bash
  $ npm install -g now
  // create start script
  $ now
  ```
 

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
```json
{
  "presets": [
    "latest"
  ]
}
```
And use babel-node in package.json scripts


## Bundling

### Module Formats:
// Things of the past:
1. Globals
2. IIFE's
  ex: (function(){})();
3. AMD - Async Module Definitions
  ex: define(['jq'], function(jq) {})

// Modern format
1. CJS - CommonJS
  ex: var jquery = require('jquery');
2. UMD - Universal Module Definitions
  ex: 
3. ES6 modules ** CHOSEN **
  ex: import jQuery form 'jquery';
  + Will be standard is JS
  + fails fast
  + tree shaking in Webpack 2 and Rollup

### Bundlers - package your code for the browser or node:
0. Requirejs - fallen out of favor
1. Browserify
+ the original
- no HTML CSS images fonts out of the box

2. Webpack ** CHOSEN **
+ handles more than just JS -- CSS, fonts, imagss
+ built-in hot loading web server
+ bundle splitting - for different sections of your app
+ tree shaking now!

3. Rollup
+ first to offer tree-shaking
+ faster than webpack and browserify
- still very new

4. JSPM
+ uses system.js behind the scenes
+ can load at runtime
+ uses rollup
+ has its own package manager

## Linting
1. JSLint
+ The original

2. JSHint
+ More configurability

3. ESLint ** CHOSEN **
+ most popular 
+ The defacto standard
** eslin-watch plugin n
** eslint-angular plugin for John Papa's Style Guide rule linting

Can define scripts in package.json
```json
    // esw = eslint-watch command, watch src, don't watch buildScripts
    "lint": "esw webpack.config.*  src  !buildScripts",
```


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














