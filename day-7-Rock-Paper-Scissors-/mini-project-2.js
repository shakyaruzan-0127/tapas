/* 
Notes
-max number / min number
-secret number is a random number between the min and max 
-get prompt from user as a guess 
-create a variable to store the number of attempts
-write the logic to check if the guess and the secret number are SVGMaskElement. if not continue a loop to ask again 
-inside loop check if the guess is less than the secret  or greater than secret number. 
-give option to play again. 
*/
function secretNumber() {
  let randomSecretNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomSecretNumber);

  let userPrompt = Number(prompt("Choose a random number between 1 and 10"));

  let userChoice = userPrompt;

  while (randomSecretNumber !== userChoice) {
    if (userChoice > randomSecretNumber && userChoice < 11) {
      userChoice = Number(prompt("too High"));
    } else if (userChoice < randomSecretNumber && userChoice < 11) {
      userChoice = Number(prompt("too Low"));
    } else if (userChoice > 10 || userChoice < 1) {
      userChoice = Number(prompt("choose a number between 1 and 10"));
    }
  }
  alert("you are correct");
}

let playAgain = "yes";

while (playAgain === "yes") {
  secretNumber();

  let playAgainPrompt = prompt("do you want to play again? (yes/no)");

  if (playAgainPrompt) {
    playAgain = playAgainPrompt.toLowerCase();
  } else {
    playAgain = "no";
  }
}
alert("thank you");
