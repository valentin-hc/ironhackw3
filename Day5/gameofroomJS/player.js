var Player = function() {
	this.inventory = ["test"]
};

Player.prototype.pickup = function(item) {
	inventory.push(item);
}



module.exports = Player;