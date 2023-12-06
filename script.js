const choices = ["rock","scissors", "paper"];
const rockBut = document.getElementById("rock-button")
function makePick() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}


console.log(makePick());
let playerChoice = ""
let computerChoice = ""

function battle() {
    let answer = makePick();
    if ( answer === "rock" ){
        return "you lost bruh";
    }
    else {
        return "o shit you won";
    }

};

function rockButton (){
    let
}

