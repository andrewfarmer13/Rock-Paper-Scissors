let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    console.log(choice);
    let choiceStr = "";
    if (choice === 1){
        choiceStr = choiceStr.concat("rock");
    }else if (choice === 2){
        choiceStr = choiceStr.concat("paper");
    }else{
        choiceStr = choiceStr.concat("scissors");
    }
   // console.log(choiceStr);
    return choiceStr;  
}

function getPlayerScore(){
    return playerScore;
}

function getComputerScore(){
    return computerScore;
}


function playRound(playerChoice){
    let compChoice = getComputerChoice();
    console.log("human choice: " + playerChoice);
    console.log("compChoice: " + compChoice);

    if((compChoice === "rock") && (playerChoice === "scissors")){
        console.log("Computer choose Rock. Rock beats Scissors. Computer Wins!");
        computerScore++;
    }else if((compChoice === "paper") &&(playerChoice === "rock")){
        console.log("Computer choose Paper. Paper beats Rock. Computer Wins!");
        computerScore++;
    }else if((compChoice === "scissors") && (playerChoice === "paper")){
        console.log("Computer choose Scissors. Scissors beats Paper. Computer Wins!");
        computerScore++;
    }else if((playerChoice === "rock")&&(compChoice === "scissors")){
        console.log("Computer choose Scissors. Rock beasts Scissors. You Win!");
        playerScore++;
    }else if((playerChoice === "paper")&& (compChoice === "rock")){
        console.log("Computer choose Rock. Paper beats Rock. You Win!");
        playerScore++;
    }else if((playerChoice === "scissors") && (compChoice === "paper")){
        console.log("Computer choose Paper. Scissors beats Paper. You Win!");
        playerScore++;
    }else{
        console.log("Draw");
    }

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

}

buttons.forEach((button) => {

    button.addEventListener("click", () => {
       playRound(button.className)
    })
});


//console.log(getplayerChoice());

//console.log(getComputerChoice());