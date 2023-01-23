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

