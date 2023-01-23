function getComputerChoice() {
  let choice;
  switch ((Math.floor(Math.random() * 3))) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
      break;
  }
  return choice;
}

function playRound(playerSelection,computerSelection) {
  let matchResults;
  
  console.log("You choose: "+playerSelection);
  console.log("PC choose: "+computerSelection);

  if (playerSelection === computerSelection) {
    matchResults = "Tie! Nobody Wins";
  }

  if (playerSelection === "Rock" && computerSelection === "Paper") {
    matchResults = "You Lose! Paper beats Rock";
  } 

  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    matchResults = "You Win! Rock beats Scissors";
  }

  if (playerSelection === "Paper" && computerSelection === "Rock") {
    matchResults = "You Win! Paper beats Rock";
  }

  if (playerSelection === "Paper" && computerSelection === "Scissors") {
    matchResults = "You Lose! Scissors beats Paper";
  }

  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    matchResults = "You Lose! Rock beats Scissors";
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    matchResults = "You Win! Scissors beats Paper";
  }

  return matchResults;
}

let playerSelection = "Rock";
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));