const choices = ["rock", "paper", "scissors"];
let humanChoice= "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let max = 3;

function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0){
        computerChoice = choices[computerChoice];
        console.log("computer chose rock");
    }
    else if(computerChoice === 1){
        computerChoice = choices[computerChoice];
        console.log("Computer chose paper");
    }
    else{
        computerChoice = choices[computerChoice];
        console.log("Computer chose scissors");
    }
}

function getHumanChoice(){
    humanChoice = prompt("Rock, Paper, or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    if (choices.includes(humanChoice)){
        console.log(`Player chose ${humanChoice}`);
    }else{
        console.log('You did not choose from the options available');
    }
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice && computerChoice === humanChoice){
        console.log("its a tie!");
        console.log(`Human chose : ${humanChoice} and Computer Chose: ${computerChoice}`)
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        console.log("You win!");
    }else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log("You win!");
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++
        console.log("You win!");
    }else{
        computerScore++;
        console.log("Computer wins!");
    }
}

function playGame(){
    let roundCounter = 1;
    let play = true;
    while(play){
        if (roundCounter != 5){
            for (roundCounter = 1; roundCounter <= 5; roundCounter++){
                console.log(`Round ${roundCounter}`);
                console.log(`Current score: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
                getComputerChoice();
                getHumanChoice();
                playRound(humanChoice,computerChoice);
            }
        }
        if (roundCounter === 5){
            if(humanScore > computerScore){
                console.log("Human Wins");
            }
            else if (computerScore > humanScore){
                console.log("Computer Wins!");
            }
            else{
                console.log("No one won.");
            }
        }
        let playAgain = "";
        playAgain = prompt("Want to play again? y/n")
        playAgain = playAgain.toLowerCase();
        if(playAgain === "y"){
            roundCounter = 1;
            humanScore = 0;
            computerScore = 0;
            play = true;
        }
        else{
            play = false;
        }
    }
    console.log("Thanks for playing!");
    
}
playGame();
// playRound(humanChoice,computerChoice);
// playRound(humanChoice, computerChoice);