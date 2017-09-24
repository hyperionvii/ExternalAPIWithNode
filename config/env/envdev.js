var envFile = __dirname + '/env.json';
var jsonfile = require('jsonfile');

var envVars = jsonfile.readFileSync(envFile);

module.exports = {
    Key: envVars["92f22e9a41ea4efb"] 
};