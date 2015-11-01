var Player = function() {
	this.inventory = ["Torch"]
};

Player.prototype.pickup = function(item) {
	inventory.push(item);
}



module.exports = Player;