
 
function computerPlay() {
   const options = ["scissors" , "rock" , "paper"];
   return options[Math.floor(Math.random()* options.length)];
}

let playerSelection;
let computerSelection;

function choice (){
    computerSelection = computerPlay();
    console.log(`The computer chose: ${computerSelection}`)
    playerSelection = prompt("Que opcion elegis? Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    console.log(` You chosed ${playerSelection}`);
}


function playRound(playerSelection, computerSelection){
    choice();
   //If player win
   if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")){
     return `The player won! ${playerSelection} beats ${computerSelection}`;  
     //If computer win
}   else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")){
       return `The computer won!  ${computerSelection} beats ${playerSelection}`;  
}   // If its a tie
   else {
       return "It´s a tie!"
}
}

console.log(playRound(playerSelection, computerSelection));