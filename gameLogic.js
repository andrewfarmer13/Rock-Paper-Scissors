let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    let choiceStr = "Computer choice: ";
    if (choice === 1){
        choiceStr = choiceStr.concat("Rock");
    }else if (choice === 2){
        choiceStr = choiceStr.concat("Paper");
    }else{
        choiceStr = choiceStr.concat("Scissors");
    }
    console.log(choiceStr);
    return choice;  
}

function getHumanChoice(){
    let humanChoice = parseInt(prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissors!"));
    return humanChoice;
}

function playRound(){
    let compChoice = getComputerChoice();
    //console.log(getComputerChoice());

    let humanChoice = getHumanChoice();

    if((compChoice === 1) && (humanChoice === 3)){
        console.log("Computer choose Rock. Rock beats Scissors. Computer Wins!");
        computerScore++;
    }else if((compChoice === 2) &&(humanChoice === 1)){
        console.log("Computer choose Paper. Paper beats Rock. Computer Wins!");
        computerScore++;
    }else if((compChoice === 3) && (humanChoice === 2)){
        console.log("Computer choose Scissors. Scissors beats Paper. Computer Wins!");
        computerScore++;
    }else if((humanChoice === 1)&&(compChoice === 3)){
        console.log("Computer choose Scissors. Rock beasts Scissors. You Win!");
        humanScore++;
    }else if((humanChoice === 2)&& (compChoice === 1)){
        console.log("Computer choose Rock. Paper beats Rock. You Win!");
        humanScore++;
    }else{
        console.log("Computer choose Paper. Scissors beats Paper. You Win!");
        humanScore++;
    };
}

playRound();
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

//console.log(getHumanChoice());

//console.log(getComputerChoice());