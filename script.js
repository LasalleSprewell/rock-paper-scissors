const choices = ["rock","scissors", "paper"];
const score = document.getElementById("score");
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





function makePick() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
function battle(playerChoice) {
    let computerChoice = makePick();
    return score.textContent = `You picked ${playerChoice} - Computer picked ${computerChoice}`;

};

function rockButton (){
    let playerChoice = "rock";

}

