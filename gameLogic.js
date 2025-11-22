let humanScore = 0;
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

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors!");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(){
    let compChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log("human choice: " + humanChoice);
    console.log("compChoice: " + compChoice);

    if((compChoice === "rock") && (humanChoice === "scissors")){
        console.log("Computer choose Rock. Rock beats Scissors. Computer Wins!");
        computerScore++;
    }else if((compChoice === "paper") &&(humanChoice === "rock")){
        console.log("Computer choose Paper. Paper beats Rock. Computer Wins!");
        computerScore++;
    }else if((compChoice === "scissors") && (humanChoice === "paper")){
        console.log("Computer choose Scissors. Scissors beats Paper. Computer Wins!");
        computerScore++;
    }else if((humanChoice === "rock")&&(compChoice === "scissors")){
        console.log("Computer choose Scissors. Rock beasts Scissors. You Win!");
        humanScore++;
    }else if((humanChoice === "paper")&& (compChoice === "rock")){
        console.log("Computer choose Rock. Paper beats Rock. You Win!");
        humanScore++;
    }else if((humanChoice === "scissors") && (compChoice === "paper")){
        console.log("Computer choose Paper. Scissors beats Paper. You Win!");
        humanScore++;
    }else{
        console.log("Draw");
    }
}

/*buttons.forEach((button) => {

    button.addEventListener("click", () => {
       playRound()
    })
});*/


playRound();
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

//console.log(getHumanChoice());

//console.log(getComputerChoice());