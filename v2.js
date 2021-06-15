let computerSelection;
let computerScore = 0;
let playerScore = 0;
let playerSelection;

function game() {
  let response = prompt("Let's play rock, paper, scissors!");
  function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
  }

  function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    console.log("Computer: " + computerSelection);
    playerSelection = response.toLowerCase();
    console.log("Player: " + playerSelection);
    if (
      (computerSelection === "rock" && playerSelection === "scissors") ||
      (computerSelection === "scissors" && playerSelection === "paper") ||
      (computerSelection === "paper" && playerSelection === "rock")
    ) {
      computerScore = ++computerScore;
      console.log(
        "you lose..." + computerSelection + " beats " + playerSelection
      );
    } else if (
      (computerSelection === "scissors" && playerSelection === "rock") ||
      (computerSelection === "paper" && playerSelection === "scissors") ||
      (computerSelection === "rock" && playerSelection === "paper")
    ) {
      playerScore = ++playerScore;
      console.log(
        "you win. " + playerSelection + " beats " + computerSelection
      );
    } else if (computerSelection == playerSelection) {
      console.log("you tied.");
    }
  }
  playRound();
  console.log(computerScore);
  console.log(playerScore);
  // console.log(playRound(computerSelection, playerSelection));
}

function declareWinner() {
  game();
  game();
  game();
  game();
  game();
  if (computerScore > playerScore) {
    console.log("Computer has won.");
  } else if (computerScore < playerScore) {
    console.log("You're a real winner, boi!");
  } else {
    console.log("You can't even beat a computer? smh..");
  }
}

declareWinner();
