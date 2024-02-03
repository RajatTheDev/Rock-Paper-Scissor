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
    result.textContent = "-";
    result.setAttribute("style", "background-color: antique-white;")
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playerDecision.textContent = "";
    computerDecision.textContent = "";

});

function computerSelection() {

    computerChoice = Math.floor(Math.random() * 3);
    computerChoice =  choices[computerChoice];

    return computerChoice;

}

function choicesMade() {

    computerDecision.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    playerDecision.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

}

function playRound() {

    if (computerChoice === playerChoice) {
        result.textContent = "It's a tie!";
        choicesMade();
    }

    else if ((computerChoice === 'rock' && playerChoice === 'paper') || (computerChoice === 'scissor' && playerChoice === 'rock') || (computerChoice === 'paper' && playerChoice === 'scissor')) {
        result.textContent = "You won the round!";
        playerScore.textContent++;
        choicesMade();
    }

    else if ((computerChoice === 'paper' && playerChoice === 'rock') || (computerChoice === 'rock', playerChoice === 'scissor') || (computerChoice === 'scissor' && playerChoice === 'paper')) {
        result.textContent = "Computer won the round!";
        computerScore.textContent++;
        choicesMade();
    }

    checkWinner();
    
}

function checkWinner() {

    if (parseInt(playerScore.innerHTML) === 5) {
        result.textContent = "You are the winner of game!";
        result.setAttribute("style", "background-color: lightgreen;")
    }

    else if (parseInt(computerScore.innerHTML) === 5) {
        result.textContent = "Computer won the game!";
        result.setAttribute("style", "background-color: red;")
    }

}