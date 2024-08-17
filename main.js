const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resetButton = document.getElementById("resetButton");









rockButton.addEventListener("click", () => gamePlay("rock"));
paperButton.addEventListener("click", () => gamePlay("paper"));
scissorsButton.addEventListener("click", () => gamePlay("scissors"));
resetButton.addEventListener("click", () => resetGame());


function compChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function resetGame() {
    computerLives = 5;
    playerLives = 5;
    computerScore = 0;
    playerScore = 0;
    gameover = false;

    const gameDecision = document.getElementById("gameDecision");
    gameDecision.textContent = "";

    const computerScoreElement = document.getElementById("computerScore");
    const playerScoreElement = document.getElementById("playerScore");
    computerScoreElement.textContent = "Computer Score: " + computerScore;
    playerScoreElement.textContent = "Player Score: " + playerScore;

    const playerLivesElement = document.getElementById("playerLives");
    const computerLivesElement = document.getElementById("computerLives");
    playerLivesElement.textContent = "Player Lives: " + playerLives;
    computerLivesElement.textContent = "Computer Lives: " + computerLives;
}



let computerLives = 5;
let playerLives = 5;
let computerScore = 0;
let playerScore = 0;
let gameover = false;
function gamePlay(playerChoice){

    if ( gameover ){
        return;
     };
    
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

    

    const gameResult = document.getElementById("gameResult");


    gameResult.value = gameDecision.textContent;

    if(playerLives === 0){
        gameResult.value = "Computer wins the game!";
        gameover = true;
        resetGame();
        
    }

    if(computerLives === 0){
        gameResult.value = "Player wins the game!";
        gameover = true;
        resetGame();
    }

  
    
    
}
