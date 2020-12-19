let playerSelection;
let computerSelection;
let round;
let playerScore  = 0;
let computerScore;
//CHOICE NO FUNCIONABA ADENTRO DE PLAYROUND PORQUE LAS VARIABLES TENIAN EL MISMO NOMBRE QUE LOS PARAMETROS DE PLAYROUND Y SE SOBREESCRIBIAN LOS VALORES

function playRound(playerChoose, computerChoose){ 
    
        //If player win
    if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")){
        return `The player won! ${playerSelection} beats ${computerSelection}`; 
    }  //If computer win
    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")){
        return `The computer won!  ${computerSelection} beats ${playerSelection}`;  
    }   // If its a tie
    else {
        return "It´s a tie!";
    }
c
}

function choice (){
    
    playerSelection = prompt("What do you choose? Rock, Paper or Scissor?").toLowerCase();
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !==  "scissor"){
        playerSelection = prompt("Write the opcion correctly (Rock, Paper or Scissor):").toLowerCase();
        if (playerSelection === "paper" && playerSelection === "rock" && playerSelection === "scissor"){
            playerSelection = playerSelection;
            break
        }
        else{
            continue
        }
    
     }
    
    computerSelection = computerPlay();
    console.log(`The computer chose: ${computerSelection}`);
    console.log(`You chose: ${playerSelection}`);
    
} 

function computerPlay() {
    const options = ["scissor" , "rock" , "paper"];
        return options[Math.floor(Math.random()* options.length)];
}




for (let i = 0 ; i < 5; i++){
    choice(); 
    console.log(playRound(playerSelection, computerSelection));
}