"use strict";
const submitbtn = document.getElementById("submit-btn");
const input = document.getElementById("guess-input");
const restart = document.getElementById("restart-btn");
const guessHistory = document.getElementById("guess-history");
const comGuess = document.getElementById("computer-guess");
const currentGuess = document.getElementById("current-guess");
const result = document.getElementById("guess-message");
    

    
   var y = Math.floor(Math.random() * 10 + 1);

let count = 1;

    //let x = parseInt(input);
    
let guess = input;



function render() {
 if (guess !== y) {
    currentGuess.innerText = guess;
  if (guess < y) {
    document.getElementById("guess-message").textContent= "Try a larger number."
        currentGuess.innerText = guess;
        guessHistory.innerText = count;
  } else if (guess > y) {
    document.getElementById("guess-message").textContent= "Try a smaller number." 
    currentGuess.innerText = guess;
    guessHistory.innerText = count;
  }
  guess = input;
  currentGuess.innerText = guess;
        guessHistory.innerText = count;
}
    if (guess == y) {
        document.getElementById("guess-message").textContent= "You won!";
        currentGuess.innerText = guess;
        guessHistory.innerText = count;
            
    }
    
    if (count > 3) {
        document.getElementById("guess-message").textContent= "Sorry, you lost!"
      comGuess.innerText = y;
      guessHistory.innerText = count;
    }

}

submitbtn.addEventListener("click", function () {
    render();
    count++;
    guess =  Number(document.getElementById("guess-input").value)
});

restart.addEventListener("click", function()  {
    location.reload();
});