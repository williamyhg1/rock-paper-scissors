

 
   
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
             return `You won! You score 1, You now have ${playerScores} score(s), I have ${computerScores} score(s).` ;
        } else if (winner == "computer"){
             return `I won! I score 1, You now have ${playerScores} score(s), I have ${computerScores} score(s).`;
        } else if (winner == "tie"){
             return `It's a tie! No one scores, You now have ${playerScores} score(s), I have ${computerScores} score(s).`;
        } else {
            return `Not a qualified hand, so I'll get 1 score 😏! You now have ${playerScores} score(s), I have ${computerScores} score(s).`
        };
    };



function game () {

    /* playerInput from player*/

    const playerChoice = prompt("Rock 🪨, Paper 📄 or Scissors ✂️?") 
    
    playRound(playerChoice, computerPlay());

    updateScores();

return winnerDeclaration(); 

};  


 
    
/* Calculate final scores after all rounds*/

function finalScores(){
    if (playerScores > computerScores) {
            return `Game over! You have ${playerScores} score(s) , I have  ${computerScores} score(s), you won 🥳  !`
    } else if ( playerScores < computerScores ) {
           return `Game over! You have ${playerScores} score(s) , I have  ${computerScores} score(s), you lost 😢 ! `
    } else { 
           return `Game over! You have ${playerScores} score(s) , I have  ${computerScores} score(s), it's a tie 😐 !`}

 };


/* Play 5 rounds with computer */

function playFiveRounds(){
    alert("Play five rounds of rock-paper-scissors with me!")
for (let i = 0; i < 5; i ++){
   alert (game());
 };
 alert(finalScores());
};

function firstFiveWins(){
    alert("Wanna challenge me with rock-paper-scissors 😈 ? Who gets five scores first wins!")
while (playerScores < 5 && computerScores <5){
    alert (game());
};
    alert(finalScores());
}

/*playFiveRounds();*/

firstFiveWins();







    
