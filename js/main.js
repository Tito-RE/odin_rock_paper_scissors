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
  (document.querySelector('#results')).prepend(div);
}

function updateScore(id) {
  let score = parseInt(document.querySelector('#'+id).textContent);
  document.querySelector('#'+id).textContent = ++score;
}

function getScore(id) {
  return parseInt(document.querySelector('#'+id).textContent);
}

function playRound(playerSelection,computerSelection) {
  playerSelection = validateUserChoice(playerSelection);

  displayText('You choose: '+playerSelection);
  displayText('PC choose: '+computerSelection);

  if (playerSelection === computerSelection) {
    displayText("Tie! Nobody Wins");
  }

  if (playerSelection === "Rock" && computerSelection === "Paper") {
    displayText("You Lose! Paper beats Rock");
    updateScore('pc-score');
  } 

  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    displayText("You Win! Rock beats Scissors");
    updateScore('user-score');
  }

  if (playerSelection === "Paper" && computerSelection === "Rock") {
    displayText("You Win! Paper beats Rock");
    updateScore('user-score');
  }

  if (playerSelection === "Paper" && computerSelection === "Scissors") {
    displayText("You Lose! Scissors beats Paper");
    updateScore('pc-score');
  }

  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    displayText("You Lose! Rock beats Scissors");
    updateScore('pc-score');
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    displayText("You Win! Scissors beats Paper");
    updateScore('user-score');
  }
  checkScore();
}

function validateUserChoice(choice) {
  choice = choice.toLowerCase();
  return (choice.substring(0,1)).toUpperCase() + choice.substring(1);
}

function game() {
  console.log("-------------- Match Result: ----------------");
  if (playerScore === computerScore) {
    console.log("Tie! Nobody Win the Match");
  } else if (playerScore > computerScore) {
    console.log("You Win the Match!");
  } else {
    console.log("You Lose the Match!");
  }
}

function checkScore() {
  let playerScore = getScore('user-score');
  let pcScore = getScore('pc-score');
  if (playerScore === 5 || pcScore === 5) {
    //block buttons and show refresh
    if (playerScore > pcScore) {
      displayText("You Win the Match!");
    } else {
      displayText("You Lose the Match!");
    }
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
  });
});




