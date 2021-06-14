We're building a rock-paper-sciccors game on our browser console.
With this project, I will demonstrate the skill of using javascript on an external script and load it into our html file.

- Computer can choose between rock, paper, and scissors, and the value will be stored in variable "computerSelection"
- Prompt the user to enter either rock, paper, or scissors(case-insensitive), and store the value in variable "playerSelection"

how do you compare them?

- Compare selections from computer and player, declares who the winner is.
  if (computer=='rock'&&player=='scissors'||compupter=='scissors'&&player=='paper'||computer=='paper'&&player=='rock'){
  "you lose."
  }else if (vise versa) {
  "you win"
  }else {
  "y'all tied"
  }

  - Next, declares what happens.
    if (computer=='rock'&&player=='paper'||computer=='paper'&&player=='rock'){
    "paper beats rock"
    }else if (computer=='rock'&&player=='scissors'||computer=='scissors'&&player=='rock') {
    "rock beats scissors"
    }else if (computer=='scissors'&&player=='paper'||computer=='paper'&&player=='scissors') {
    "scissors beat paper"
    }

  * combine these two results.
