"use strict"
var read = require("read");


var options = {
    prompt: "What's your name?\n>"
}
// Our options object, the prompt is simply what will appear in the command line when read is called

read(options, displayName)
// The prompt itself, passing options, and using our callback function after input

function displayName (err, name){
    console.log("Your name is: " + name)
}
// Outputs whatever the user has entered back to the console