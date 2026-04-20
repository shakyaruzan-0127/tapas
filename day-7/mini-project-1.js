function rockPaperScissors() {
  const userChoicePrompt = prompt("Enter Rock, Paper, Scissors");
  const userChoice = userChoicePrompt.toLowerCase();
  let computerMove;
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }

  console.log("User selected", userChoice);
  console.log("Computer selected", computerMove);
  if (
    (userChoice === "rock" && computerMove === "scissors") ||
    (userChoice === "paper" && computerMove === "rock") ||
    (userChoice === "scissors" && computerMove === "paper")
  ) {
    console.log("you win");
  } else if (userChoice === computerMove) {
    console.log("its a tie");
  } else if (
    (userChoice === "scissors" && computerMove === "rock") ||
    (userChoice === "rock" && computerMove === "paper") ||
    (userChoice === "paper" && computerMove === "scissors")
  ) {
    console.log("you lose"); 
  } else {
    console.log('check your input');
  }
  const playAgainPrompt = prompt('do you want to play again? (yes/no)');

  let playAgain;
  if (playAgainPrompt) {
    playAgain = playAgainPrompt.toLowerCase();
  } else {
    playAgain = 'no';
  }
  if (playAgain === 'yes') {
    rockPaperScissors();
  } else {
    console.log('c u next time');
  }
}
rockPaperScissors();
