"use strict"

var Room = function(id, description, N, E, S, W, item) {
	this.id = id;
	this.description = description;
	this.N = N;
	this.E = E;
	this.S = S;
	this.W = W;
	this.item = item;
}

var room1 = new Room (0,
					 "You are in a room full of toys",
					 1,
					 "There is no door there",
					 "There is no door there",
					 "There is no door there",
					 ["sword", "toy", "hamburger"]);
var room2 = new Room (1,
					 "You are in a room full of wood",
					 "There is no door there",
					 2,
					 0,
					 "There is no door there",
					 []);
var room3 = new Room (0,
					 "You are in a room full of water",
					 "There is no door there",
					 "There is no door there",
					 3,
					 1,
					 []);
var room4 = new Room (0,
					 "You are in a room full of animals",
					 2,
					 4,
					 "There is no door there",
					 "There is no door there",
					 []);
var room5 = new Room (4,
					 "You are in a room full of money",
					 "you made it out with all the money !!!",
					 "There is no door there",
					 "There is no door there",
					 3,
					 []);


var rooms = [room1, room2, room3, room4, room5];

module.exports = rooms;