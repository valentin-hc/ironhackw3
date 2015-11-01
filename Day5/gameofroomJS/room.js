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
					 "You are in a room full of toys, there is a door on the North",
					 1,
					 "There is no door there",
					 "There is no door there",
					 "There is no door there",
					 ["sword", "bear toy", "hamburger toy"]);
var room2 = new Room (1,
					 "You are in a room full of wood, it seems like there is a hole on the East.",
					 "There is no door there",
					 2,
					 0,
					 "There is no door there",
					 ["wood", "broken shield"]);
var room3 = new Room (0,
					 "You are in a room full of water, your shoes are wet, there is a door on the Southern area",
					 "There is no door there",
					 "There is no door there",
					 3,
					 1,
					 ["flask"]);
var room4 = new Room (0,
					 "You are in a room full of animals, they seem quite friendly, a little path is on the East.",
					 2,
					 4,
					 "There is no door there",
					 "There is no door there",
					 ["friendly cat", "snake"]);
var room5 = new Room (4,
					 "You are in a room full of money",
					 "you made it out with all the money !!!",
					 "There is no door there",
					 "There is no door there",
					 3,
					 ["bag of money", "golden chest"]);


var rooms = [room1, room2, room3, room4, room5];

module.exports = rooms;