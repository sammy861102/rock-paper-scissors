function round() {
  // - Prompt the user to enter either rock, paper, or scissors(case-insensitive), and store the value in variable "playerSelection"
  let response = prompt("Let's play rock, paper, scissors!");
  let playerSelection = response.toLowerCase();
  console.log("player: " + playerSelection);

  // - Computer can choose between rock, paper, and scissors, and the value will be stored in variable "computerSelection"
  function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
  }
  let computerSelection = computerPlay();
  console.log("computer: " + computerSelection);

  // how do you compare them?

  // - Compare selections from computer and player, declares who the winner is.
  // if (computer=='rock'&&player=='scissors'||compupter=='scissors'&&player=='paper'||computer=='paper'&&player=='rock'){
  // "you lose."
  // }else if (vise versa) {
  // "you win"
  // }else {
  // "y'all tied"
  // }
  function whoWin(c, p) {
    if (
      (c === "rock" && p === "scissors") ||
      (c === "scissors" && p === "paper") ||
      (c === "paper" && p === "rock")
    ) {
      return "you lose...";
    } else if (
      (c === "scissors" && p === "rock") ||
      (c === "paper" && p === "scissors") ||
      (c === "rock" && p === "paper")
    ) {
      return "you win.";
    } else if (c == p) {
      return "you tied.";
    }
  }
  let resulta = whoWin(computerSelection, playerSelection);

  //   - Next, declares what happens.
  //     if (computer=='rock'&&player=='paper'||computer=='paper'&&player=='rock'){
  //     "paper beats rock"
  //     }else if (computer=='rock'&&player=='scissors'||computer=='scissors'&&player=='rock') {
  //     "rock beats scissors"
  //     }else if (computer=='scissors'&&player=='paper'||computer=='paper'&&player=='scissors') {
  //     "scissors beat paper"
  //     }

  //   * combine these two results.
  function whatHappens(c, p) {
    if ((c == "rock" && p == "paper") || (c == "paper" && p == "rock")) {
      return "Paper beats rock.";
    } else if (
      (c == "rock" && p == "scissors") ||
      (c == "scissors" && p == "rock")
    ) {
      return "Rock beats scissors.";
    } else if (
      (c == "scissors" && p == "paper") ||
      (c == "paper" && p == "scissors")
    ) {
      return "scissors beat paper";
    } else {
      return "No one won.";
    }
  }

  let resultb = whatHappens(computerSelection, playerSelection);

  // function combine(a, b) {
  //   return a + b;
  // }
  console.log(resulta + " " + resultb);

  // function playerScore() {
  //   let x = 0;

  //   if (resulta === "you win.") {
  //     return (x += 1);
  //   } else {
  //     return x;
  //   }
  // }
  // function computerScore() {
  //   let y = 0;

  //   if (resulta == "you lose...") {
  //     return (y += 1);
  //   } else {
  //     return y;
  //   }
  // }
  // console.log(playerScore() + ":" + computerScore());
}
round();
round();
round();

// function game() {
//   let x;
//   let y;
//   round();
//   if (resulta == "you win.") {
//     return (x += 1);
//   } else if (resulta == "you lose...") {
//     return (y += 1);
//   }

//   console.log(x + ":" + y);
// }
// game();
// function playerScore(result) {
//   let x;
//   for (i = 0; i < 5; i++) {
//     if (resulta == "you win.") {
//       return (x += i);
//     }
//   }
// }
// console.log(playerScore(resulta));
