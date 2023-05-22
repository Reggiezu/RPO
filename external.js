function getComputerChoice(){
/*random number generation if 1-head 2-rock 3-Scissors
the random number should be an int varable 
the function should return the output to the console log
*/
var Ran;
Ran = Math.floor(Math.random() * 3);
if (Ran == 0){
    console.log("Rock");
    return "ROCK";
}
else if(Ran == 1){
    console.log("Paper");
    return "PAPER";
}
else if(Ran == 2){
    console.log("Scissors");
    return "SCISSORS";
}
}
function RPS(playerSelection, computerSelection){
/*
Get the player Selection
Use the getComputerChoice function for the computer selection
allow  playerSelection parameter case-insensitive
establish the winner of the round (ex. Rock > Scissors) 
Return winner
*/
var pp=playerSelection.toUpperCase();
if (pp=="ROCK" && computerSelection == "ROCK"){
    console.log("Tie");
    return 3;
}
else if (pp=="ROCK" && computerSelection == "PAPER"){
    console.log("You Lose! Paper beats Rock");
    return 2;
}
else if (pp=="ROCK" && computerSelection == "SCISSORS"){
    console.log("You Win! Rock beats Scissors");
    return 1;
}
else if (pp=="PAPER" && computerSelection == "PAPER"){
    console.log("Tie");
    return 3;
}
else if (pp=="PAPER" && computerSelection == "ROCK"){
    console.log("You Win! Paper beats Rock");
    return 1;
}
else if (pp=="PAPER" && computerSelection == "SCISSORS"){
    console.log("You Lose! Scissors beats Paper");
    return 2;
}
else if (pp=="SCISSORS" && computerSelection == "SCISSORS"){
    console.log("Tie");
    return 3;
}
else if (pp=="SCISSORS" && computerSelection == "PAPER"){
    console.log("You Win! Scissors beats Paper");
    return 1;
}
else if (pp=="SCISSORS" && computerSelection == "ROCK"){
    console.log("You Lose! Rock beats Scissors");
    return 2;
}
}

function game(){
var play=0;
var com = 0;
var tie =0;
    for(let i=0; i<5; i++){
       let playerSelection= prompt ("Please pick between Rock, Paper, Scissors" )
       let computerSelection = getComputerChoice();
            if (RPS(playerSelection, computerSelection)==1)
                play++;
            else if (RPS(playerSelection, computerSelection)==2)
                com ++;
            else if (RPS(playerSelection, computerSelection)==3)
                tie ++;
    }
    if (play > com){
        console.log("You win " + play + " to " + com);
    }
    else  if (play < com){
        console.log("You lose " + play + " to " + com);
    }
}


