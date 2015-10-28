// console.log( "a".charCodeAt(0) );  //=>  97
// console.log( "z".charCodeAt(0) );  //=> 122
// console.log( "A".charCodeAt(0) );  //=>  65
// console.log( "Z".charCodeAt(0) );  //=> 90



// function caesarCipher (message, shift) {
// 	shift = typeof shift !== 'undefined' ? shift : -3;
// 	array = message.split("")
// 	var encrypted = array.map(function(letter) {
// 		if ((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) {
// 			return String.fromCharCode(letter.charCodeAt(0) + shift);
// 		}
// 		else {
// 			return letter;
// 		}
// 	});
// 	return encrypted.join("");
// }

// var encrypted = caesarCipher("Et tu, brute?");

// console.log(encrypted);



function caesarCipher (message, shift) {
	var inbound = function(letter, shift) {
		if ((letter >= "a" && letter <= "z") && (letter.charCodeAt(0) + shift < 97)) {
			return (letter.charCodeAt(0) + 26 + shift)
		}
		else if ((letter >= "a" && letter <= "z") && (letter.charCodeAt(0) + shift > 122)) {
			return (letter.charCodeAt(0) - 26 + shift)
		}
		else if ((letter >= "A" && letter <= "Z") && (letter.charCodeAt(0) + shift < 65)) {
			return (letter.charCodeAt(0) + 26 + shift)
		}
		else if ((letter >= "A" && letter <= "Z") && (letter.charCodeAt(0) + shift > 90)) {
			return (letter.charCodeAt(0) - 26 + shift)
		}
		else if ((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) {
			return (letter.charCodeAt(0) + shift)
		}
		else {
			return letter;
		}
	} 

	shift = typeof shift !== 'undefined' ? shift : -3;
	array = message.split("")
	var encrypted = array.map(function(letter) {
		if ((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) {
			return String.fromCharCode(inbound(letter, shift));
		}
		else {
			return letter;
		}
	});
	return encrypted.join("");
}

var encrypted = caesarCipher("Et tu, brute?", 6);

console.log(encrypted);