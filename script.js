let computerChoice;
let firstCharacter;
let playerChoice;
let choices = ["rock", "paper", "scissor"];

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score")
const result = document.querySelector(".winner");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const playAgain = document.querySelector("#restart");
const playerDecision = document.querySelector(".player-decision");
const computerDecision = document.querySelector(".computer-decision");

function computerSelection() {

    computerChoice = Math.floor(Math.random() * 3);
    computerChoice =  choices[computerChoice];

    return computerChoice;

}

rockButton.addEventListener('click', function player() {

    if (playerScore.textContent < 5 && computerScore.textContent < 5) {
        playerChoice = rockButton.value;
        computerSelection();
        playRound(playerChoice, computerSelection);
        return playerChoice;
    }

});
    
paperButton.addEventListener('click', function player() {

    if (playerScore.textContent < 5 && computerScore.textContent < 5) {
        playerChoice = paperButton.value;
        computerSelection();
        playRound(playerChoice, computerSelection);
        return playerChoice;
      }

});
    
scissorButton.addEventListener('click', function player() {

    if (playerScore.textContent < 5 && computerScore.textContent < 5) {
        playerChoice = scissorButton.value;
        computerSelection();
        playRound(playerChoice, computerSelection);
        return playerChoice;
    }

});

playAgain.addEventListener('click', () => {
    document.location.reload(true);
});

function choicesMade() {

    computerDecision.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    playerDecision.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

}

function playRound() {

    if (computerChoice === playerChoice) {
        result.textContent = "Tied! Play again.";
        choicesMade();
    }

    else if ((computerChoice === 'rock' && playerChoice === 'paper') || (computerChoice === 'scissor' && playerChoice === 'rock') || (computerChoice === 'paper' && playerChoice === 'scissor')) {
        result.textContent = "You won the round!";
        playerScore.textContent++;
        choicesMade();
    }

    else if ((computerChoice === 'paper' && playerChoice === 'rock') || (computerChoice === 'rock', playerChoice === 'scissor') || (computerChoice === 'scissor' && playerChoice === 'paper')) {
        result.textContent = "You lost the round";
        computerScore.textContent++;
        choicesMade();
    }

    checkWinner();
    
}

function deactivateButtons() {
    rockButton.removeEventListener('click', () => {

    });
    scissorButton.removeEventListener('click', () => {

    });
    paperButton.removeEventListener('click', () => {

    });
}

function checkWinner() {

    if (parseInt(playerScore.innerHTML) === 5) {
        result.textContent = "You are the winner of game!";
        deactivateButtons();
    }

    else if (parseInt(computerScore.innerHTML) === 5) {
        result.textContent = "Computer won the game!";
        deactivateButtons();
    }

}