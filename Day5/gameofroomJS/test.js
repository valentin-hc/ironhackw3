var pickAndDrop = function (answer, items) {
		if (answer.substr(0,4) === "Pick") {
			var object = answer.split("Pick up ")[1];
			items.push(object);
		} else if (answer.substr(0,4) === "Drop") {
			var object = answer.split("Drop ")[1];
			var index = items.indexOf(object);
			if (index > -1) {
				items.splice(index, 1);
			}
		}
	};


var array = ["test", "test"];
pickAndDrop("Pick up sword", array);
console.log(array);
pickAndDrop("Drop sword", array);
console.log(array);






// 	read(this.options, this.roomAnswer.bind(this))
