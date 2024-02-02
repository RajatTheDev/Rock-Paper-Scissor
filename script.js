let computerChoice;
let playerChoice;

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score")
const result = document.querySelector(".winner");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const playAgain = document.querySelector("#restart")

function computerSelection() {

    computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerChoice = 'rock';
    }
    else if (computerChoice === 2) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissor';
    }

    return computerChoice;

}

rockButton.addEventListener('click', function player() {
    playerChoice = rockButton.value;
    computerSelection()
    playRound(playerChoice, computerSelection)
    return playerChoice

});
    
paperButton.addEventListener('click', function player() {
    playerChoice = paperButton.value;
    computerSelection()
    playRound(playerChoice, computerSelection)
    return playerChoice

});
    
scissorButton.addEventListener('click', function player() {
    playerChoice = scissorButton.value;
    computerSelection()
    playRound(playerChoice, computerSelection)
    return playerChoice

});

playAgain.addEventListener('click', () => {
    document.location.reload(true);
});


function playRound() {

    if (parseInt(playerScore.innerHTML) === 5) {
        result.innerHTML = "You are the winner of game!";
        rockButton.removeEventListener('click');
        scissorButton.removeEventListener('click');
        paperButton.removeEventListener('click');
    }

    else if (parseInt(computerScore.innerHTML) === 5) {
        result.innerHTML = "Computer won the game!";
        rockButton.removeEventListener('click');
        scissorButton.removeEventListener('click');
        paperButton.removeEventListener('click');
    }

    else if (computerChoice === playerChoice) {
        result.innerText = "Tied! Play again.";
    }

    else if ((computerChoice === 'rock' && playerChoice === 'paper') || (computerChoice === 'scissor' && playerChoice === 'rock') || (computerChoice === 'paper' && playerChoice === 'scissor')) {
        result.innerText = "You won the round!";
        playerScore.innerHTML = 1 + parseInt(playerScore.innerHTML);
    }

    else if ((computerChoice === 'paper' && playerChoice === 'rock') || (computerChoice === 'rock', playerChoice === 'scissor') || (computerChoice === 'scissor' && playerChoice === 'paper')) {
        result.innerText = "You lost the round";
        computerScore.innerHTML = 1 + parseInt(computerScore.innerHTML);
    }
    
}