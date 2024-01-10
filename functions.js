/* 
Initialize scores
Get the computers choice (randomly return rock, paper or scissors) */

let playerScore;
let computerScore;





/* 
Play a round 
*/



function playRound() {

    let playerSelection;
    let computerSelection;  

    function getComputerChoice() {
        var random = Math.floor(Math.random() * 3) + 1; 
        if (random == 1) {
            return "rock"; 
        } else if (random == 2) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    

    playerSelection = prompt("What's your choice?");
    computerSelection = getComputerChoice(); 

    function playerPoint() {
        playerScore++;

    
        return 'You win 1 point! ' + playerSelection + ' beats ' + computerSelection + '. You have ' + playerScore + ' points!';
    }
    
    function computerPoint() {
        computerScore++;
    
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '. Computer wins 1 point, and has ' + computerScore + ' points.';
    } 

    playerSelection.toLowerCase;

    if (playerSelection == computerSelection) {
        return "It's a tie, play again."  
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return playerPoint(playerScore, computerScore);
      //  return 'You Win! Rock beats Scissors';
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return computerPoint(playerScore, computerScore);
     //   return 'You Lose! Paper beats Rock';
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return computerPoint(playerScore, computerScore);
     //   return 'You Lose! Scissors beats Paper';
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return playerPoint(playerScore, computerScore);
     //   return 'You Win! Paper beats Rock';
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return computerPoint(playerScore, computerScore);
    //    return 'You Lose! Rocks beats Scissors';
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return playerPoint(playerScore, computerScore);
    //    return 'You Win! Scissors beats Paper';
    }


}




/* 
Game: 5 rounds
Winner is most points at the end of 5 rounds
*/

function game() {

    playerScore = 0;
    computerScore = 0;


    /* 2 player choices (computer & player) */

    for (let r = 0; r <5; r++ ) {
        let current = r + 1;
        console.log('Round ' + current + ': ' + playRound());
    }


   if (computerScore > playerScore) {
    console.log('You lose! Computer: ' + computerScore + ' / You: ' + playerScore)
   } else if (playerScore > computerScore ) {
    console.log('You win! You: ' + playerScore + ' / Computer: ' + computerScore )
   } else if (playerScore == computerScore) {
    console.log('Tie! You: ' + playerScore + ' / Computer: ' + computerScore)
   }
}



game();


