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

    let computerSelection;  

    const results = document.querySelector('#results');

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


    computerSelection = getComputerChoice(); 

    playerSelection.toLowerCase;

    if(playerScore < 5 || computerScore < 5 ) {

    function playerPoint() {
        playerScore++;

    
        console.log() ;

        results.innerHTML = 'Computer selected: ' + computerSelection + ' / Player selected: ' + playerSelection
        + '</br> You win this round! ' + playerSelection + 
        ' beats ' + computerSelection + 
        '. Score: Player ' +  playerScore + ' / Computer ' + computerScore;

        if (playerScore == 5 || computerScore == 5 ) {
            results.innerHTML = 'You win! Final Score: Player ' +  playerScore + ' / Computer ' + computerScore;

            playerScore = 0;
            computerScore = 0;
        }
    }
    
    function computerPoint() {
        computerScore++;
    
        console.log();

        results.innerHTML = 'Computer selected: ' + computerSelection + ' / Player selected: ' + playerSelection
        + '</br> You lose this round. ' + computerSelection + 
        ' beats ' + playerSelection + 
        '. Computer wins 1 point. Score: Player ' +  playerScore + ' / Computer ' + computerScore;

        if (playerScore == 5 || computerScore == 5) {
            results.innerHTML = 'You lose! Final Score: Player ' +  playerScore + ' / Computer ' + computerScore;

            playerScore = 0;
            computerScore = 0;
    
        } 
    } 

    if (playerSelection == computerSelection) {
        results.innerHTML = 'Its a tie, play again. </br>Score: Player ' +  playerScore + ' / Computer ' + computerScore;
        return "It's a tie, play again."  
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return playerPoint(playerScore, computerScore);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return computerPoint(playerScore, computerScore);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return computerPoint(playerScore, computerScore);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return playerPoint(playerScore, computerScore);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return computerPoint(playerScore, computerScore);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return playerPoint(playerScore, computerScore);
    }

    } else {
        results.innerHTML = 'Final Score: Player ' +  playerScore + ' / Computer ' + computerScore;
    }



} 



btns.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound(playerSelection);
    });
  });


