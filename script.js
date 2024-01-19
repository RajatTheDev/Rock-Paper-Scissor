let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;
let play = true;

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

function playerSelection() {

    playerChoice = prompt("Enter a choice: Rock, Paper, Scissor");

    return playerChoice;

}

function playRound(playerSelection, computerSelection) {

    computerChoice = computerChoice.toLowerCase();

    playerChoice = playerChoice.toLowerCase();

    if (computerChoice === playerChoice) {
        console.log('Tie!, Play again!');
    }

    else if ((computerChoice === 'rock' && playerChoice === 'paper') || (computerChoice === 'scissor' && playerChoice === 'rock') || (computerChoice === 'paper' && playerChoice === 'scissor')) {
        console.log("Player won the round!");
        playerScore = playerScore + 1;
    }

    else if ((computerChoice === 'paper' && playerChoice === 'rock') || (computerChoice === 'rock', playerChoice === 'scissor') || (computerChoice === 'scissor' && playerChoice === 'paper')) {
        console.log("You lost the round");
        computerScore = computerScore + 1;
    }

    else {
        console.warn("Enter a valid choice!");
    }

    console.log(`Player's choice: ${playerChoice}, Computer's choice: ${computerChoice}`);
    console.log(`Computer Score: ${computerScore}, Player Score: ${playerScore}`);

}

function game() {

    while (play) {
        
        if (playerScore === 5) {
            console.log("Player won the game!");
            play = false;
        }
        else if (computerScore === 5) {
            console.log("Computer won the game!");
            play = false;
        }
        else {

            computerSelection();
            console.log(computerChoice);
            playerSelection();
            playRound();

        }

    }

}

game();