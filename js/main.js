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

function displayText(text) {
  div = document.createElement('div');
  div.textContent = text;
  (document.querySelector('#results')).appendChild(div);
}

function playRound(playerSelection,computerSelection) {
  let roundResult;
  playerSelection = validateUserChoice(playerSelection);

  displayText('You choose: '+playerSelection);
  displayText('PC choose: '+computerSelection);

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

function game(playerSelection) {
  let playerScore = 0;
  let computerScore = 0;
  //let playerSelection;
  //let computerSelection; 

  //for (let i = 0; i < 5; i++) {
    //console.log("---------- "+ "Round: " + (i + 1) + " ----------");
    //playerSelection = prompt("What's your choice?");
    roundResult = playRound(playerSelection, getComputerChoice());
    if (roundResult === 1){
        playerScore++;
    }
    if (roundResult === 2){
        computerScore++;
    }
    console.log("Player: " + playerScore + " | " + "Computer: " + computerScore);
  //}

  console.log("-------------- Match Result: ----------------");
  if (playerScore === computerScore) {
    console.log("Tie! Nobody Win the Match");
  } else if (playerScore > computerScore) {
    console.log("You Win the Match!");
  } else {
    console.log("You Lose the Match!");
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
  });
});


