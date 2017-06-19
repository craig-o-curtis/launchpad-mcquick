
// this file is not transpiled, therefor must be ES5

// register babel to transpile before tests run
require('babel-register');

// disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
