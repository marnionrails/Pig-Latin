function pigLatin(input) {

  if (input[0] === "a" || input[0] === "e" || input[0] === "i" || input[0] === "o" || input[0] === "u") {
    return input.concat("way");
} else {
    return input.slice(1).concat(input[0]).concat("ay");
	}
}

console.log(pigLatin("castle"));