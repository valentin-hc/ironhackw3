"use strict"
var read = require("read");
var rooms = require("./room.js");
var Player = require("./player.js");

var Game = function(rooms){
	// this.rooms = rooms;
	this.current = 0;
	this.player = new Player();
}



Game.prototype.set = function() {
	var player = this.player;
	var inventory = player.inventory;
	var current = this.current;
	var options = {
    prompt: (rooms[current].description + "\n>")
	}
	read(options, roomAnswer)

	function roomAnswer (err, answer){
		var command = translateAnswer(answer);
		if (typeof command === "number") {
			current = command;
			options = {
				prompt: (rooms[current].description + "\n>")
			}
			read(options, roomAnswer);
		}else {
			console.log(command);
			read(options, roomAnswer);
		}
	}
	
	var translateAnswer = function (answer) {
		if (answer === "exit") {
			process.exit();
		}else if (answer === "N") {
			return rooms[current].N;
		}else if (answer === "E") {
			return rooms[current].E;
		}else if (answer === "S") {
			return rooms[current].S;
		}else if (answer === "W") {
			return rooms[current].W;
		}else if (answer === "Inventory"){
			return inventory;
		}else {
			return "What was that?"
		}
	}
	var pickAndDrop = function (answer, items) {
		if (answer.substr(0,4) === "Pick") {
			var object = answer.split("Pick up ")[1];
			items.push(object);
		}
	}

};




var mygame = new Game(rooms);
mygame.set();
// console.log(mygame.current);