const choices = ["rock","scissors", "paper"];
const score = document.getElementById("score");
const numbScore = document.getElementById("numbered-score");
const finalScore = document.getElementById("final-score");
let playerScore = 0;
let computerScore = 0;
// Rock Button Setup
const rockBut = document.getElementById("rock-button");
rockBut.addEventListener("click", function(){
    let playerChoice = "rock";
    battle(playerChoice);
});
// Scissors Button Setup
const scissorsBut = document.getElementById("scissors-button");
scissorsBut.addEventListener("click", function(){
    let playerChoice = "scissors";
    battle(playerChoice);
});
// Paper Button Setup
const paperBut = document.getElementById("paper-button");
paperBut.addEventListener("click", function(){
    let playerChoice = "paper";
    battle(playerChoice);
});
// This function randomly picks scissors, paper or rock
function makePick() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
// This function actually compares your pick to the random pick of the computer
function battle(playerChoice) {
    let computerChoice = makePick();
    keepScore(playerChoice, computerChoice);
    return score.textContent = `You picked ${playerChoice} - Computer picked ${computerChoice}`;

};
// This function keeps the score
function keepScore(playerChoice, computerChoice){
    if (
    playerChoice === "rock" && computerChoice === "scissors" || 
    playerChoice === "paper" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "paper"){
        playerScore++;
    }
    else if (
    playerChoice === "rock" && computerChoice === "paper" || 
    playerChoice === "paper" && computerChoice === "scissors" ||
    playerChoice === "scissors" && computerChoice === "rock"
    ){
        computerScore++;
    }
    numbScore.textContent = `Player: ${playerScore} vs  Computer: ${computerScore}`;
    if (playerScore === 10){
        finalScore.textContent = `YOU WON!!!!`;
        rockBut.disabled = true;
        paperBut.disabled = true;
        scissorsBut.disabled = true;
        setTimeout(reset, 3000);
    } else if(computerScore === 10) {
        finalScore.textContent = `YOU LOST, YOU BUM!!!`;
        rockBut.disabled = true;
        paperBut.disabled = true;
        scissorsBut.disabled = true;
        setTimeout(reset, 3000);
    }
    
}
// This function resets the score once the game is over
function reset (){
    numbScore.textContent = "Player: 0 vs Computer: 0";
    playerScore = 0;
    computerScore = 0;
    finalScore.textContent = ``;
    score.textContent = ``;
    rockBut.disabled = false;
    paperBut.disabled = false;
    scissorsBut.disabled = false;
}