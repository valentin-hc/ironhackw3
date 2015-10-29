var test = [{"number": 1.5},{"number": 1.1},{"number": 1.4}]

var sortByNumber = function(array) {
	return array.sort(function(a,b) {
		return (a.number) - (b.number);
	});

}

console.log(sortByNumber(test));



var filterLow = function(array) {
	return array.filter(function(object) {
		return object.number <= 1.3;
	});
}

console.log(filterLow(test));
