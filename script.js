





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
    
    /*if player stands off, win or lose to computer hands each round */

    const wonClaim = "It's a tie! No one scores!"
    const lostClaim = "You Won! You score 1!"
    const tieClaim = "You Lost! Computer scores 1!"

    function playRound(playerSelection, computerSelection){
        let input = playerSelection.toLowerCase();
    if (input == computerSelection) {
        return tieClaim 
    } else if (input == 
        "rock" && computerSelection == "scissors" || input == "paper" && computerSelection == "rock" || input == "scissors" && computerSelection == "paper") {
            return wonClaim
        } else if (input == 
            "scissors" && computerSelection == "rock" || input == "rock" && computerSelection == "paper" || input == "paper" && computerSelection == "scissors"){
            return lostClaim;
        } else {
            return "Not a qualified hand! so computer scores 1!";
    };
     };

    /* input from player*/

    const playerChoice = prompt("what's your hand?")  
    const play = playRound(playerChoice, computerPlay());
    
    alert(play);
    
    /* calculate scores*/

    function calcScores(result){
      if (result == wonClaim){
        return playerScores ++;
     } else if (result == lostClaim){
        return computerScores ++;
     } else if (result == tieClaim){
        return playerScores += 0;
     } else {
         return computerScores ++;
     };
    };
   return calcScores(play);
};

let playerScores = 0;
let computerScores = 0;

/*Calculate final scores after all hands*/

function finalScores(){
    if (playerScores > computerScores) {
        alert(`Your score ${playerScores}, computer scores ${computerScores}, you won! :)`)
       } else if ( playerScores < computerScores ) {
           alert(`Your score ${playerScores}, computer scores ${computerScores}, you lost! :(`)} else { 
           alert (`Your score ${playerScores}, computer scores ${computerScores}, it's a tie! :|`)}
}
 
/* Play 5 rounds with computer */

function play5Rounds(){
    alert("Let's play 5 rounds of Rock-Paper-Scissors with computer!")
    for (let i = 0; i < 5; i++){
    game();
  }
finalScores();
}



play5Rounds();




    
