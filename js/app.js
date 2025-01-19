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

    let x = parseInt(input.value);
function render() {
    
    
    

     
     if (count >= 3) {
    if (x === y) {
        document.getElementById("guess-message").textContent= "You won!"
        currentGuess.innerText = x;
    }
    else if (x < y) {
        document.getElementById("guess-message").textContent= "Try a larger number."
        currentGuess.innerText = x;
    }
    else {
        document.getElementById("guess-message").textContent= "Try a smaller number." 
        currentGuess.innerText = x;
    }
    }
    else {
         {
        document.getElementById("guess-message").textContent= "Sorry, you lost!"
         comGuess.innerText = y;
     } 
    }
    guessHistory.innerText = count;
}


submitbtn.addEventListener("click", function () {
   render();
  count++;
});