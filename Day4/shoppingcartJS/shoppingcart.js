var Item = require("./item.js");
var ShoppingCart = require("./cart.js");

// make one file per class !!!! good practice for good challenges !!


var apple = new Item ("apple", 10);
var orange = new Item ("orange", 5);
var grapes = new Item ("grapes", 15);
var banana = new Item ("banana", 20);
var watermelon = new Item ("watermelon", 50);

var myCart = new ShoppingCart();

myCart.addItem(apple);
myCart.addItem(orange);
myCart.addItem(banana);
myCart.addItem(grapes);
myCart.addItem(apple);
myCart.addItem(apple);



var test = myCart.total();
console.log(test);
// console.log(myCart.total());
