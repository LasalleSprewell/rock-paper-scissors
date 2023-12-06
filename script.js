const choices = ["rock","scissors", "paper"];
const score = document.getElementById("score");
// Rock Button Setup
const rockBut = document.getElementById("rock-button");
rockBut.addEventListener("click", function(){
    let playerChoice = "rock";
    battle(playerChoice);
});




function makePick() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
function battle(playerChoice) {
    let answer = makePick();
    if ( answer === "rock" ){
        return score.textContent = "you lost bruh";
    }
    else {
        return score.textContent = "o shit you won";
    }

};

function rockButton (){
    let playerChoice = "rock";

}

