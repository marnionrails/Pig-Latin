function pigLatin(input) {
	let startingConsonants = "";
	for (let i=0; i<input.length; i+=1) {
		if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
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

/*   if (input[0] === "a" || input[0] === "e" || input[0] === "i" || input[0] === "o" || input[0] === "u") {
    return input.concat("way");
} else {
    
    return input.slice(1).concat(input[0]).concat("ay");
	}
}
 */
console.log(pigLatin("castle"));