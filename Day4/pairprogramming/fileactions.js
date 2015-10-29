var fileActions = function(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);
    episodes = filterLow(episodes);
    sortByNumber(episodes);
    format(episodes);
    
}


var format = function(episodes) {	
	for (var i = 0; i < episodes.length; i++) {
		console.log("Title: ".green + episodes[i].title + " Episode #: " + episodes[i].episode_number);
		var text = episodes[i].description;
		var halfSize = text.length/2;
		var rating = episodes[i].rating;
		console.log(text.slice(0, halfSize) + text.slice(halfSize, text.length).red);
		console.log(("Rating: " + rating).red + repeatString("*", parseInt(rating)));
	};
}

var repeatString = function(string, number) {
	var result = "";
	for (var i = 0; i < number; i++) {
		result += string;
	};
	return result;
}


var sortByNumber = function(array) {
	array.sort(function(a,b) {
		return (a.episode_number) - (b.episode_number);
	});
}

var filterLow = function(array) {
	return array.filter(function(object) {
		return object.rating <= 8.5;
	});
};

module.exports = fileActions;
