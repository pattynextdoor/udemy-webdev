var secretNumber = 4;

var guess = prompt("Guess a number");

if(Number(guess) === secretNumber) {
  alert("You got it right!");
}

else if(Number(guess) > secretNumber){
  alert("Too high. Guess again.");
}

else {
  alert("Too low. Guess again.");
}
