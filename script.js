/* Scores will be updated after each round of game */
let playerScores = 0;
let computerScores = 0;
let winner = " ";

/* Generate computer random hands */

function computerPlay() {
  let computerhand = Math.floor(Math.random() * 3);
  if (computerhand == 0) {
    return "rock";
  } else if (computerhand == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

/* If player stands off, win or lose to computer hands each round */
const computerhand = document.querySelector(".computerhand");
function playRound(playerSelection, computerSelection) {
  
  computerhand.textContent = 'My hand is ' + computerSelection + '!' ;
  
  if (playerSelection == computerSelection) {
    winner = "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    winner = "player";
  } else if (
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    winner = "computer";
  } else {
    winner = "default";
  }
}

function updateScores() {
  if (winner == "player") {
    return playerScores++;
  } else if (winner == "computer") {
    return computerScores++;
  } else if (winner == "tie") {
    return (playerScores += 0);
  } else {
    return computerScores++;
  }
}

function winnerDeclaration() {
  if (winner == "player") {
    return `You won 😢 ! `;
  } else if (winner == "computer") {
    return `I won 🥳 !`;
  } else if (winner == "tie") {
    return `It's a tie 😐 !`;
  }
}

/* Selection from player and commence the game */

function game() {
  playRound(playerChoice, computerPlay());
  updateScores();
  return winnerDeclaration();
}

/* Calculate final scores after all rounds*/

function finalScores() {
  if (playerScores > computerScores) {
    return `Game over! you won 😢 !`;
  } else if (playerScores < computerScores) {
    return `Game over! I won 🥳 ! `;
  } else {
    return `Game over! it's a tie 😐 !`;
  }
}

/* Play 5 rounds with computer  five rounds or get 5 scores first*/

function playFiveRounds() {
  for (let i = 0; i < 5; i++) {
    game();
  }
  finalScores();
}

function firstFiveWins() {

  while (playerScores < 5 && computerScores < 5) {
    game();
  }
  alert(finalScores());
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

//Generate games from player clicks the image//
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
rock.addEventListener("click", game);

//Algorithm for interaction

function game(e) {
  
  

  let playerChoice;
  if (e.target.className == "rock") {
    playerChoice = "rock";
  } else if (e.target.className == "paper") {
    playerChoice = "paper";
  } else if (e.target.className == "scissors") {
    playerChoice = "scissors";
  }

  playRound(playerChoice, computerPlay());

  updateScores();

  //Computer and Player Score panels
  const showScore1 = document.querySelector(".showScore1");
  showScore1.textContent = computerScores;
  const showScore2 = document.querySelector(".showScore2");
  showScore2.textContent = playerScores;
  
  
  
  
  
  // Declare winner & Final Result after five rounds
  const declarationEl = document.querySelector(".declaration");
  if (playerScores < 5 && computerScores < 5){
    declarationEl.textContent = winnerDeclaration()
  } else if (playerScores == 5 || computerScores == 5) {
    computerhand.textContent = finalScores();
    declarationEl.textContent = 'Do you want to play again?';
  }

  //Reset Game -- play again


}

// const reply = document.createElement('div')
// reply.className = 