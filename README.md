# Pig Dice

#### This application translates user input to pig latin

#### By **Marni Sucher Shanen Cross**

## Technologies Used

* HTML/CSS
* Bootstrap
* jQuery
* JavaScript
* VS Code 

## Description

This program will translate user input to pig latin by following the rules described below.

## Tests

Rules: Words that begin with a vowel, add "way" to the end. Words that begin with one or more consonants, move all of the first consecutive consonants to the end, and add "ay". If the first consonants include "qu", move the "u" along with the "q". For words beginning with "y", treat "y" as a consonant.

Test #1 Describe: pigLatin()
        Test: "It will add 'way' to the end of words that begin with a vowel"
        Expect(pigLatin("a")).toEqual("away");
        
Test #2 Test: "It will move the first consonant to the end and add 'ay'"
				Expect(pigLatin("castle")).toEqual("astlecay");

Test #3 Test: "It will move all the first consonants to the end and add 'ay'"
        Expect(pigLatin("scary")).toEqual("aryscay");

Test #4 Test: "If the first consonants include 'qu', it will move the 'u' along with the 'q'".
        Expect(pigLatin("squeak")).toEqual("eaksquay");

Test #5 Test: "If a word begins with 'y', treat 'y' as a consonant."
        Expect(pigLatin("year")).toEqual("earyay");

Test #6 Test: "Ignore non-alphabetical characters."
				Expect(pigLatin("#$#sc%ary*)).toEqual("aryscay");

Test #7 Test: "Ignore capitalization, making the result lower-case"
				Expect(pigLatin(ScaRY)).to("aryscay");

Test #8 Test: "Translate multiple words seperately"
				Expect(pigLatin("how are you?")).toEqual("owhay areway ouyay");

## Setup/Installation Requirements

* Open terminal and navigate to 'Desktop'.
* In terminal, type 'git clone https://github.com/marnionrails/Pig-Latin' and press enter.
* In terminal, type 'cd Pig-Latin' and press enter.
* In terminal, type 'code .' and press enter to open project in VS Code.
* Right click on 'index.html' and select 'Open with Live Server' to view page in your favorite web browser.

## Known Bugs

* _Any known issues_
* _should go here_

## License

Available under GPL Licensing

Copyright(c) 2021 Marni Sucher Shanen Cross

## Contact Information

For support, please contact Marni Sucher at suchermarni@gmail.com or Shanen Cross at shanencross@yahoo.com
