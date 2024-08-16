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

function playerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices;
}

function gamePlay(){
    let result;
    if (compChoice() === playerChoice()){
        return "It's a tie!";
    }

    if (compChoice() === "rock" && playerChoice() === "scissors"){
        return "Computer wins!";
    }

    if (compChoice() === "rock" && playerChoice() === "paper"){
        return "Player wins!";
    }

    if (compChoice() === "paper" && playerChoice() === "rock"){
        return "Computer wins!";
    }

    if (compChoice() === "paper" && playerChoice() === "scissors"){
        return "Player wins!";
    }


    const gameDecision = document.getElementById("gameDecision");
    gameDecision.textContent = result;
}