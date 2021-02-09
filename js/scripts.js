function pigLatin(input) {
	let startingConsonants = "";
	for (let i=0; i<input.length; i+=1) {
		if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
			startingConsonants += input[i];
		}
		else if (input[i] === "u" && input[i-1] === "q") {
			startingConsonants += input[i];
		}
		else {
			let pigLatinEndingLetters = "";
			if (i === 0) {
				pigLatinEndingLetters = "way";
			}
			else {
				pigLatinEndingLetters = "ay";
			}

			return input.slice(i).concat(startingConsonants).concat(pigLatinEndingLetters);
		}
	}

	
}

console.log(pigLatin("a"));