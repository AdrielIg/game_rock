const images = Array.from(document.querySelectorAll(".player-options"));
const scorePlayer = document.querySelector(".score-player");
const scoreComputer = document.querySelector(".score-computer");
const scoreRound = document.querySelector(".round-score");
const options = ["scissor", "paper", "rock"];
const winner = document.querySelector(".winner");
const result = document.querySelector(".result");
const boton = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;
let roundScore = 0;


//The game start when you click on a image
images.forEach((image) =>
    image.addEventListener("click", () => {
        if ((playerScore >= 5) || (computerScore >= 5)){
            return
        }
        else{
            game(image.dataset.value);
        }
    }));


//Computer choice 
function computerChoice() {
    
    return options[Math.floor(Math.random()*options.length)];
};

//Function that decide who win
function playRound(playerSelectionChoice, computerSelectionChoice){
        
        //If player win
        if ((playerSelectionChoice === "paper" && computerSelectionChoice === "rock") || (playerSelectionChoice === "rock" && computerSelectionChoice === "scissor") || (playerSelectionChoice === "scissor" && computerSelectionChoice === "paper")){
            return `You win! ${playerSelectionChoice} beats ${computerSelectionChoice}`; 
             
                
        }  //If computer win
        else if ((playerSelectionChoice === "rock" && computerSelectionChoice === "paper") || (playerSelectionChoice === "scissor" && computerSelectionChoice === "rock") || (playerSelectionChoice === "paper" && computerSelectionChoice === "scissor")){
            return `You lose! ${computerSelectionChoice} beats ${playerSelectionChoice}`;
              
                
        }   // If its a tie
        else {
            return "It´s a tie!";
            
        }
};

//Functionalitty of the game
function game (selectionPlayer) {
    let playerSelection = selectionPlayer;
    let computerSelection = computerChoice();
    console.log(`COMPUTER CHOICE : ${computerSelection}`)
    console.log(`PLAYER CHOICE : ${playerSelection}`)
    let roundPlayed = playRound(playerSelection, computerSelection);
    console.log(roundPlayed);
     
    //scores and round when a win happen
    if (roundPlayed.includes("You win")){
        playerScore++;
        roundScore++;
    }

    else if (roundPlayed.includes("You lose")){
        computerScore++;
        roundScore++;
    }
    else{
        roundScore++;
    }

    //Change values of scores
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    scoreRound.textContent = roundScore;
    result.textContent = roundPlayed;

    //when someone reachs 5 points
    if (playerScore === 5){
        winner.textContent = "Congratulations! You win!"
    }
    else if (computerScore === 5) {
        winner.textContent = "Buuu! The computer win!"
    }

}

document.addEventListener("click" , (boton) =>{
    
    if (boton.target.dataset.value === "rest"){
        computerScore = 0;
        playerScore = 0;
        roundScore = 0;
    
        scorePlayer.textContent = "0";
        scoreComputer.textContent = "0";
        scoreRound.textContent = "0";
        result.textContent = "";
        winner.textContent = "";
    }
    
    
});
 
