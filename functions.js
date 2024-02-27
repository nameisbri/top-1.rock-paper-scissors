/* 
Initialize scores
Get the computers choice (randomly return rock, paper or scissors) */

let playerScore;
let computerScore;

let playerSelection;

playerSelection = '';

const btns = document.querySelectorAll('button');

playerScore = 0;
computerScore = 0;


function playRound() {


    // 2 player choices (computer & player) 

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
    


   // playerSelection = prompt("What's your choice?"); // replace with clicked button ID 
        // search the DOM for a button click
        // return the ID of the button clicked

    computerSelection = getComputerChoice(); 

    console.log('computer:' + computerSelection);
    console.log('player:' + playerSelection)

    function playerPoint() {
        playerScore++;

    
        console.log('You win 1 point! ' + playerSelection + 
        ' beats ' + computerSelection + 
        '. Score: Player ' +  playerScore + ' / Computer ' + computerScore) ;
    }
    
    function computerPoint() {
        computerScore++;
    
        console.log('You lose! ' + computerSelection + 
        ' beats ' + playerSelection + 
        '. Computer wins 1 point. Score: Player ' +  playerScore + ' / Computer ' + computerScore);
    } 

    playerSelection.toLowerCase;

    if (playerSelection == computerSelection) {
        console.log('Its a tie, play again.');
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



btns.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound(playerSelection);
    });
  });


