var config = {};

var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  config = require('./env/envdev.js');
}else if(env === 'production'){
  config = require('./env/envproduction.js');
}

module.exports = config;