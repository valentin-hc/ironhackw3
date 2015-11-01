"use strict"

var read = require("read");
var rooms = require("./room.js");
var Player = require("./player.js");

var Game = function(rooms){
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
	this.checkRoom(answer);
	this.pick(answer);
	this.drop(answer);
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
		return "Just chillin' here."
	}
};

Game.prototype.pick = function (answer) {
	if (answer.substr(0,4) === "Pick") {
		var object = answer.split("Pick up ")[1];
		var itemIndex = rooms[this.current].item.indexOf(object);
		if ( itemIndex > -1 ) {
			this.player.inventory.push(object);
			rooms[this.current].item.splice(itemIndex, 1);
		} 
		else {
			console.log("There is no " + object + " in this room.")
		}
	}
};

Game.prototype.drop = function (answer) {
	if (answer.substr(0,4) === "Drop") {
		var object = answer.split("Drop ")[1];
		var indexItem = this.player.inventory.indexOf(object);
		if (indexItem > -1) {
			rooms[this.current].item.push(object);
			this.player.inventory.splice(indexItem, 1);
		}else {
			console.log("You don't have " + object + " in your inventory.")
		}
	}
};

Game.prototype.checkRoom = function(answer) {
	if (answer === "Check room") {
		console.log("In the room you see : ")
		rooms[this.current].item.forEach(function(i) {
			console.log("a " + i)
		});
	}

}


Game.prototype.set = function() {
	read(this.options, this.roomAnswer.bind(this));
};




var mygame = new Game(rooms);
mygame.set();
// console.log(mygame.current);