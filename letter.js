

var Letter = function(letterPassedIn) {


this.character = letterPassedIn;

this.appear = false;

this.chooseLetterToDisplay = function() {

    if ( this.appear == true) {
        return this.character;
    }else{
        return "_";
    }
}


}




















//     this.current = "_";
//     this.theLetters = letters;
//     this.showLetter = false;
    
//     this.inputLetter = function(letter) {
//         if(this.theLetters == letter) {
//             this.current = this.theLetters;
//             return true;
//         }
//         return false;
//     }
//     this.letterShows = function() {
//         return this.current;
//     }
// }


// var x = new Letter("x");
// console.log(chooseLetterToDisplay());
// console.log(x.character);
// console.log("hi",x.inputLetter("r"));

exports = Letter;