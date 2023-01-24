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
  let roundResult;
  playerSelection = validateUserChoice(playerSelection);

  console.log("You choose: "+playerSelection);
  console.log("PC choose: "+computerSelection);

  if (playerSelection === computerSelection) {
    console.log("Tie! Nobody Wins");
    roundResult = 0;
  }

  if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You Lose! Paper beats Rock");
    roundResult = 2;
  } 

  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("You Win! Rock beats Scissors");
    roundResult = 1;
  }

  if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You Win! Paper beats Rock");
    roundResult = 1;
  }

  if (playerSelection === "Paper" && computerSelection === "Scissors") {
    console.log("You Lose! Scissors beats Paper");
    roundResult = 2;
  }

  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    console.log("You Lose! Rock beats Scissors");
    roundResult = 2;
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log("You Win! Scissors beats Paper");
    roundResult = 1;
  }

  return roundResult;
}

function validateUserChoice(choice) {
  choice = choice.toLowerCase();
  return (choice.substring(0,1)).toUpperCase() + choice.substring(1);
}

function game() {
  let playerSelection;
  let computerSelection; 

  for (let i = 0; i < 5; i++) {
    console.log("---------- "+ "Round: " + (i + 1) + " ----------");
    playerSelection = prompt("What's your choice?");
    computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);
  }
}

game();