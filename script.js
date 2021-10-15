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

function playRound(playerSelection, computerSelection) {
  const computerhand = document.querySelector(".computerhand");
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
    return `Game over! You have ${playerScores} score(s) , I have  ${computerScores} score(s), you won 😢 !`;
  } else if (playerScores < computerScores) {
    return `Game over! You have ${playerScores} score(s) , I have  ${computerScores} score(s), I won 🥳 ! `;
  } else {
    return `Game over! You have ${playerScores} score(s) , I have  ${computerScores} score(s), it's a tie 😐 !`;
  }
}

/* Play 5 rounds with computer  five rounds or get 5 scores first*/

function playFiveRounds() {
  alert("Play five rounds of rock-paper-scissors with me!");
  for (let i = 0; i < 5; i++) {
    alert(game());
  }
  alert(finalScores());
}

function firstFiveWins() {
  alert(
    "Wanna challenge me with rock-paper-scissors 😈 ? Who gets five scores first wins!"
  );
  while (playerScores < 5 && computerScores < 5) {
    alert(game());
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

  //remove old scores//
  const removeElements = (elms) => elms.forEach((el) => el.remove());
  removeElements(document.querySelectorAll(".showScore"));
  


  //Computer and Player Score panels
  const showScore1 = document.createElement("div");
  showScore1.className = "showScore";
  showScore1.textContent = computerScores;
  computerScoreEl = document.querySelector(".computerScore");
  computerScoreEl.append(showScore1);

  const showScore2 = document.createElement("div");
  showScore2.className = "showScore";
  showScore2.textContent = playerScores;
  playerScoreEl = document.querySelector(".playerScore");
  playerScoreEl.append(showScore2);

  //Declare winner
  const declarationEl = document.querySelector(".declaration");
  declarationEl.textContent = winnerDeclaration();
  
  //Final Result
  //Reset Game -- play again


}

