const choices = ["rock", "paper", "scissors"];
const winners = [];

function startGame() {
  let buttons = document.querySelectorAll(".selection");
  buttons.forEach((button) => 
  button.addEventListener(("click"), () => {
    if (button.id) {
      playRound(button.id);
    }
  }))
}

function playRound(playerSelection) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }

  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  tallyWins();
  displayRound(playerSelection, computerSelection, winner);
  wins = checkWins();
  if (wins == 5) {
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((items) => item == "Player").length;

  if (playerWins == 5) {
    document.querySelector(".winner").textContent = "Congratulations, you won 5 games!"
  } else {
    document.querySelector(".winner").textContent = "Sorry, the computer won 5 games.."    
  }
}

function displayRound(playerSelection, computerSelection, winner) {
  document.querySelector(".playerChoice").textContent = `You chose: ${
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
  }`;
  document.querySelector(".winner").textContent = `Round winner: ${winner}`;
}

function tallyWins() {
  const playerWins = winners.filter((item) => item == "Player").length;
  const computerWins = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length; 
  document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
  document.querySelector(".ties").textContent = `Score ${ties}`;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function checkWins() {
  const playerWins = winners.filter((item) => item == "Player").length;
  const computerWins = winners.filter((item) => item == "Computer").length;
  return Math.max(playerWins, computerWins);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP == "rock" && choiceC == "scissors") || 
    (choiceP == "paper" && choiceC == "rock") || 
    (choiceP == "scissors" && choiceC == "paper")
  ) {
   return "Player"; 
  } else {
    return "Computer";
  }
}

function setWins() {
  const playerWins = winners.filter((item) => item == "Player").length;
  const computerWins = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}

startGame();
