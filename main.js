function computerPlay() {
    const options = ["scissors" , "rock" , "paper"];
    return options[Math.floor(Math.random()* options.length)];
}

let computerSelection = computerPlay();
console.log(computerSelection)
let playerSelection = "paper";
console.log(playerSelection)

function playRound(playerSelection, computerSelection){
    //If player win
    if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")){
      console.log("The player won");  
      //If computer win
}   else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")){
        console.log("The computer won");  
}   // If its a tie
    else {
        console.log("It´s a tie!")
}
}

playRound(playerSelection, computerSelection);