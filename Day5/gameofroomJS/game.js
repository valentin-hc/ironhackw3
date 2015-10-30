"use strict"
var read = require("read");
var rooms = require("./room.js");
var Player = require("./player.js");

var Game = function(rooms){
	// this.rooms = rooms;
	this.current = 0;
	this.player = new Player();
	this.options = {
    prompt: (rooms[this.current].description + "\n>")
	}
};


Game.prototype.roomAnswer = function (err, answer){
	var command = this.translateAnswer(answer);
	if (typeof command === "number") {
		this.current = command;
		this.options = {
			prompt: (rooms[this.current].description + "\n>")
		}
		read(this.options, this.roomAnswer.bind(this));
	}else {
		console.log(command);
		read(this.options, this.roomAnswer.bind(this));
	}
};

Game.prototype.translateAnswer = function (answer) {
	this.pickAndDrop(answer);
	if (answer === "exit") {
		process.exit();
	}else if (answer === "N") {
		return rooms[this.current].N;
	}else if (answer === "E") {
		return rooms[this.current].E;
	}else if (answer === "S") {
		return rooms[this.current].S;
	}else if (answer === "W") {
		return rooms[this.current].W;
	}else if (answer === "Inventory"){
		return this.player.inventory;
	}else {
		return "What was that?"
	}
};

Game.prototype.pickAndDrop = function (answer) {
	if (answer.substr(0,4) === "Pick") {
		var object = answer.split("Pick up ")[1];
		this.player.inventory.push(object);
	} else if (answer.substr(0,4) === "Drop") {
		var object = answer.split("Drop ")[1];
		var index = this.player.inventory.indexOf(object);
		if (index > -1) {
			this.player.inventory.splice(index, 1);
		}
	}
};


Game.prototype.set = function() {
	read(this.options, this.roomAnswer.bind(this));
};




var mygame = new Game(rooms);
mygame.set();
// console.log(mygame.current);