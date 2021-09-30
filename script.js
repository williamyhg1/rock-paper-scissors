

    let wonClaim = `It's a tie! No one scores!.`
    let lostClaim = `You Won! You score 1!.`
    let tieClaim = `You Lost! Computer scores 1!.`
   
   

function game () {

    /* Generate computer random hands */ 

  function computerPlay() {
    let comphand = Math.floor(Math.random()*3);
    if (comphand == 0){
        return "rock";
    } else if (comphand == 1) {
        return "paper";
    } else {
        return "scissors";
    };
    };
    
    /* If player stands off, win or lose to computer hands each round */

    function playRound(playerSelection, computerSelection){
        let input = playerSelection.toLowerCase();
        if (input == computerSelection) {
            return tieClaim 
            } else if (input == 
                "rock" && computerSelection == "scissors" || input == "paper" && computerSelection == "rock" || input == "scissors" && computerSelection == "paper") {
                    return wonClaim;
            } else if (input == 
                "scissors" && computerSelection == "rock" || input == "rock" && computerSelection == "paper" || input == "paper" && computerSelection == "scissors"){
                    return lostClaim;
            } else {
                    return "Not a qualified hand! so computer scores 1!";
        };
     
    };  

    /* input from player*/

    const playerChoice = prompt("Rock, Paper or Scissors?") 
    let gameResult = playRound(playerChoice, computerPlay());

    /* Calculate scores after each round of game*/
    
    function calcScores(result){
        if (result == wonClaim){
             return playerScores ++;
        } else if (result == lostClaim){
             return computerScores ++;
        } else if (result == tieClaim){
             return playerScores + 0;
        } else {
            return computerScores ++;
        };

    };

    calcScores(gameResult);  


return gameResult;

};  


/* Scores will be updated after each round of game*/

let playerScores = 0;
let computerScores = 0;    

    
/* Calculate final scores after all rounds*/

function finalScores(){
    if (playerScores > computerScores) {
            alert(`You score ${playerScores}, computer scores ${computerScores}, you won! :)`)
    } else if ( playerScores < computerScores ) {
           alert(`You score ${playerScores}, computer scores ${computerScores}, you lost! :(`)
    } else { 
           alert (`You score ${playerScores}, computer scores ${computerScores}, it's a tie! :|`)}

 };


/* Play 5 rounds with computer */

function playFiveRounds(){
    alert("Let's play 5 rounds of Rock-Paper-Scissors with computer!");
    for (let i = 0; i < 5; i++){
    alert(game());
  }
    finalScores(); 
};



playFiveRounds();








    
