/* let playerSelection;
let computerSelection;
let round = 0;
let playerScore = 0;
let computerScore = 0;

//Choice didn´t work inside playRound cause variables had the same name as the parameters

function playRound(playerChoose, computerChoose){ 
        //If player win
    if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "paper")){
        playerScore++;
        round++;
        return `The player won! ${playerSelection} beats ${computerSelection}`; 
            
    }  //If computer win
    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissor" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissor")){
        computerScore++;
        round++;
        return `The computer won!  ${computerSelection} beats ${playerSelection}`;  
            
    }   // If its a tie
    else {
        round++;
        computerScore++;
        playerScore++;
        return "It´s a tie!";
    }
}

function playerChoice (){
    
    playerSelection = prompt("What do you choose? Rock, Paper or Scissor?").toLowerCase();
    while (["scissor" , "rock" , "paper"].indexOf(playerSelection) === -1){
        playerSelection = prompt("Write the opcion correctly (Rock, Paper or Scissor):").toLowerCase();
        
    }

    console.log(`You chose: ${playerSelection}`);
    
    
} 
function computerChoice(){
    computerSelection = computerPlay();
    console.log(`The computer chose: ${computerSelection}`);   
}

function computerPlay() {
    const options = ["scissor" , "rock" , "paper"];
        return options[Math.floor(Math.random()* options.length)];
}

function finalResult(){
    if (playerScore === 5){
        return "PLAYER WINS"
    }
    else if (computerScore === 5){
        return "COMPUTER WINS"
    }
}

if (playerScore <= 5 && computerScore <= 5){
    while (playerScore < 5 && computerScore < 5){
        playerChoice();
        computerChoice(); 
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player´s Points: ${playerScore}`);
        console.log(`Computer´s Points: ${computerScore}`);  
    }
    if (playerScore === 5 || computerScore === 5){
        console.log(finalResult());
    }
}
<<<<<<< HEAD

 */


/* function playerChoice(e){
    const playerSelection = document.querySelector(`img[id = "${e.target}"]`);
    console.log(playerSelection);
} */


 window.addEventListener("click", function(e){
    const playerSelection = document.querySelector(`.player-paper[id = "#${e.target.id}"]`);
    console.log(playerSelection);
 });
=======
>>>>>>> 7b48e040105fde5e5359588a208b37ac41f33701
