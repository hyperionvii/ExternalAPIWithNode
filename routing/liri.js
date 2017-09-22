var keyStuff = require("../data/keys.js")
var express = require("express");
var bodyParser = require("body-parser");
var Twitter = require('twitter');
var request = require('request');

////twitter

module.exports = function(app) {


	app.post("/api/displayStuff", function(req, res) {

		var queryURL = "http://api.wunderground.com/api/" +
        keyStuff + "conditions/q/CA/San_Francisco.json"

        res.json(queryURL)

    });

};



