

var prompt = require("prompt");
var Game = require("./games.js");


prompt.start();

game = {
    wordsWon: 0,
    guessesRemaining: 10,
    currentWord : null,
    startGame : function() {
        this.resetGuessesRemaining();
        this.lettersAlreadyGuessed = "";

        this.currentWrd = new Word()

    }
}

//after this, I would prompt to guess each letter of a blank array of letters

//using word.js to check the word and letter.js to check each letter. 
//also adding another .js file to import to hold all of the words to pass through 
//and be created randomly using Math.floor(Math.random() 
//at the end of each guess it would either prompt a function to continue guessing
//if the letter is correct, or if the number of guesses is over, would use a function
//to end the game