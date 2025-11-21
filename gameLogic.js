function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    let choiceStr = "";

    if(choice===1){
        choiceStr = choiceStr.concat("Rock");
    }else if(choice===2){
       choiceStr = choiceStr.concat("Paper");
    }else{
       choiceStr = choiceStr.concat("Scissors");
    }
    
    return choiceStr;
}



//console.log(getComputerChoice());