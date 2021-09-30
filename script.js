

 
   
   /* Scores will be updated after each round of game*/

    let playerScores = 0;
    let computerScores = 0;   
    let winner = " ";


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
        let playerInput = playerSelection.toLowerCase();
        if (playerInput == computerSelection) {
            winnner = "tie";
            } else if (playerInput == 
                "rock" && computerSelection == "scissors" || playerInput == "paper" && computerSelection == "rock" || playerInput == "scissors" && computerSelection == "paper") {
                    winner = "player";
            } else if (playerInput == 
                "scissors" && computerSelection == "rock" || playerInput == "rock" && computerSelection == "paper" || playerInput == "paper" && computerSelection == "scissors"){
                    winner = "computer";
            } else {
                    winner = "default";
        };
    };  

    function updateScores(){
        if (winner == "player"){
             return playerScores ++;
        } else if (winner == "computer"){
             return computerScores ++;
        } else if (winner == "tie"){
             return playerScores += 0;
        } else {
            return computerScores ++;
        };
    };

    function winnerDeclaration(){
        if (winner == "player"){
             return `Player won! Player scores 1, player now has ${playerScores} score(s), computer has ${computerScores} score(s).` ;
        } else if (winner == "computer"){
             return `Computer won! Computer scores 1, player now has ${playerScores} score(s), computer has ${computerScores} score(s).`;
        } else if (winner == "tie"){
             return `It's a tie! No one scores, player now has ${playerScores} score(s), computer has ${computerScores} score(s).`;
        } else {
            return `Not a qualified hand, computer got 1 score! player now has ${playerScores} score(s), computer has ${computerScores} score(s).`
        };
    };



function game () {

    /* playerInput from player*/

    const playerChoice = prompt("Rock, Paper or Scissors?") 
    
    playRound(playerChoice, computerPlay());

    updateScores();

return winnerDeclaration(); 

};  


 
    
/* Calculate final scores after all rounds*/

function finalScores(){
    if (playerScores > computerScores) {
            return `You score ${playerScores}, computer scores ${computerScores}, you won! :)`
    } else if ( playerScores < computerScores ) {
           return `You score ${playerScores}, computer scores ${computerScores}, you lost! :(`
    } else { 
           return `You score ${playerScores}, computer scores ${computerScores}, it's a tie! :|`}

 };


/* Play 5 rounds with computer 

function playRounds(){
for (let i = 0; i < 5; i ++){
    game();
 };
};



playRounds();


*/




    
