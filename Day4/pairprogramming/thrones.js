"use strict"

var colors = require("colors");
var fs = require('fs');
var fileActions = require('./fileactions')
fs.readFile("./thrones.json", 'utf8', fileActions);


