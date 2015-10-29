var ShoppingCart = function() {
	this.items = [];
};

ShoppingCart.prototype.addItem = function(item) {
	console.log("Adding " + item.name + " at price " + item.price + "$."  )
	this.items.push(item);
};

ShoppingCart.prototype.total = function() {
	var total = this.items.reduce(function(pv, cv) { 
		return pv + cv.price; 
	},0);
	return overFive(total, this.items.length)
};

var overFive = function(price, quantity) {
	if (quantity > 5) {
		return price * 0.9;
	} else {
		return price;
	}
};


module.exports = ShoppingCart;