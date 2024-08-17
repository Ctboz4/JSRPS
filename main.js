const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");








rockButton.addEventListener("click", () => gamePlay("rock"));
paperButton.addEventListener("click", () => gamePlay("paper"));
scissorsButton.addEventListener("click", () => gamePlay("scissors"));


function compChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}




let computerLives = 5;
let playerLives = 5;
let computerScore = 0;
let playerScore = 0;
function gamePlay(playerChoice){
    
    const computerChoice = compChoice();
    let result;

    if (computerChoice === playerChoice) {
        result = "It's a tie!";
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "rock")
    ) {
        result = "Computer wins!"; computerScore++; playerLives--;
    } else {
        result = "Player wins!" ; playerScore++; computerLives--;
    }

    const gameDecision = document.getElementById("gameDecision");
    gameDecision.textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;

    const computerScoreElement = document.getElementById("computerScore");
    const playerScoreElement = document.getElementById("playerScore");
    computerScoreElement.textContent = "Computer Score" + " " + computerScore;
    playerScoreElement.textContent = "Player score" + " " + playerScore;

    const playerLiveselement = document.getElementById("playerLives");
    const computerLiveselement = document.getElementById("computerLives");

    playerLiveselement.textContent = "Player Lives" + " " + playerLives;
    computerLiveselement.textContent = "Computer Lives" + " " + computerLives;

  
    
}
