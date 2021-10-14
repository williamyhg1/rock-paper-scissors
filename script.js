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
    return `You won 😢 ! You score 1, You now have ${playerScores} score(s), I have ${computerScores} score(s).`;
  } else if (winner == "computer") {
    return `I won 🥳 ! I score 1, You now have ${playerScores} score(s), I have ${computerScores} score(s).`;
  } else if (winner == "tie") {
    return `It's a tie 😐 ! No one scores, You now have ${playerScores} score(s), I have ${computerScores} score(s).`;
  } else {
    return `Not a qualified hand, so I'll get 1 score 😏! You now have ${playerScores} score(s), I have ${computerScores} score(s).`;
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



const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


// function getPlayerHand(e){

// let playerChoice  
// if(e.target.className == 'rock'){
// playerChoice = 'rock';
// } else if (e.target.className == 'paper'){
//   playerChoice = 'paper'
// } else if(e.target.className == 'scissors'){
//   playerChoice = 'scissors'
// }
//   console.log(playerChoice)
// }

let playerChoice

rock.addEventListener('click',() => playerChoice = 'rock')
paper.addEventListener('click',() => playerChoice = 'paper')
scissors.addEventListener('click',() => playerChoice = 'scissors')

console.log(playerChoice)


//Generate computer hand//
//rock.addEventListener('click', game());

//Generat


  //  if (element == rock){
  //   broadcastElement.textContent = 'rock';
  // } else if (element == paper){
  //   broadcastElement.textContent = 'paper';
  // } else if (element == scissors){
  //   broadcastElement.textContent = 'scissors';
  // } 


// const textElement = document.createElement('p');
// textElement.textContent = 'This is a Test Message'
// target = document.getElementById('target')

// function showHand(){
//  target.append(textElement)
//  setTimeout(() => 
//   textElement.remove()
//   , 1500)
// }




// rock.addEventListener('mousedown', showHand)


/*



const declaration = document.getElementById('broadcast')

function sayHiR(){
  declaration.appendChild(playerhandRock);
}
function sayHiP(){
  declaration.appendChild(playerhandPaper);
}
function sayHiS(){
  declaration.appendChild(playerhandScissors);
}

const scores = document.createElement('p')
computerScore.appendChild('scores').textContent = '5';
playerScore.appendChild('scores').textContent = '10';*/




