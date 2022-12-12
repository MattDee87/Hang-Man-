import prompt from "readline-sync";
import wordBank from "./word-bank.js";

//console.clear();
console.log(wordBank);


////let feedback = prompt.question("Ready to play Y|N?");
//console.log(feedback);

//if feedback = "N";

//hint use while loop.  Make sure it is not infinate 
  

//Hangman 



//Pick a random word from the word bank

var word = wordBank [Math.floor(Math.random() * wordBank.length)];


//Answer Array showing how many letters to guess using '_'

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray [i] = "_";
};

//this is a variable showing the number of letters to be guessed
var remainingLetters = wordBank.length;

//******** Main Game ********//

//while loop shoing the letters that are left to guess 
while (remainingLetters > 0) {
  //showing "_" remaining 
  console.log(answerArray.join(" "));
   
  //player types a guess 
  var guess = prompt.question ("Guess a letter or ctr + c to cancel!");

  //if guess is blank 
  if (guess == null) {
    //if a letter is not picked end game loop
    break;
  }else if (guess.length !== 1) {
    //if more then one letter is guessed
    console.log("Please guess one letter");
  }else {
    //if the letter they guessed is in the word or if it is not in the word 
    for (var j = 0; j < word.length; j++){
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }

  }
  //******** end of game loop ********//

}

//let the player know what the word is
console.log(answerArray.join (" "));
console.log("You Won!  The word was  " + word);


