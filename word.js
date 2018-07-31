var Letter = require('./letter.js');


var Word = function(wordPassedIn) {
    
    this.word = wordPassedIn;
    this.letterArray = [];

    this.found = false;

    this.makeArray = function() {
        for(var i = 0; i < this.word.length; i++) {
           this.letterArray.push(new Letter(this.word[i])); 
        }
    }
}

this.didWeFindIt = function() {

    var counter = 0;

    for ( var i = 0; i < this.letterArray.length; i++) {
        if(this.letterArray[i].appear !== true) {
            return false
        }
        else if (this.letterArray[i] === true) {
            counter++;
        }
    }
if(counter === this.letterArray.length) {
    return true;
}
else{
    return false;
}
        
    
}

this.checkIfLetterFound = function(guessedLetter) {

    console.log(guessedLetter);
    var numberOfLettersLeft = 0;


    for (var i = 0; i < this.letterArray.length; i++) {
        if(this.letterArray.character === guessedLetter){
            this.letterArray[i].appear =true;
            numberOfLettersLeft ++;
        }
    }

    return numberOfLettersLeft;
}


this.wordDisplay = function() {
    var string = " ";

    for (var i = 0; i< this.letterArray.length; i++) {
        string += this.letterArray[i].chooseLetterToDisplay();
    }

    return string;
}






















// var Word = function (gameWord) {

//     this.gameWord = gameWord;

//     this.guessedWord = [];
//     this.guesses = [];
//     this.winning = false;

//     this.getLetters = function () {
//         for (var i = 0; i < this.gameWord.length; i++) {



//             var theNewLetter = new Letter(this.gameWord[i]);
//             this.guessedWord.push(theNewLetter);
//         }
//     }

//     this.getLetters();

//     this.findLetter = function (guessedLetter) {
//         for (var i = 0; i < this.guesses.length; i++) {
//             if (guessedLetter == guesses[i]) {
//                 return true;
//             }

//         }
//         // console.log(guessedLetter);
//         var added = false;

//         this.guesses.push(guessedLetter);


//         for (var i = 0; i < this.guessedWord.length; i++) {
//             if (this.guessedWord[i].inputLetter(guessedLetter)) {
//                 this.guessedWord[i].showLetter = true;
//                 added = true;
//             }

//         }
//         return added;


//     }

//     this.compareWords = function () {
//         for (var i = 0; i < this.gameWord.length; i++) {
//             if (this.gameWord.toString(i) != this.guessedWord[i].current) {
//                 return false;
//             }
//         }
//         return true;
//     }



//     this.displayLetters = function () {

//         var emptyString = " ";
//         for (var i = 0; i < this.guessedWord.length; i++) {
//             emptyString += this.guessedWord[i].current + " ";
//         }
//         return emptyString;
//     }

// }



var blue = new Word("red");
console.log(blue.word);
// console.log(blue.theNewLetter);
console.log(blue.guessedLetter);
// console.log(blue.compareWords());
// console.log(blue.displayLetters());
// console.log(blue.findLetter("r"));
// console.log(blue.findLetter("h"));




exports = Word;