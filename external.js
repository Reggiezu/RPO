function getComputerChoice(){
/*random number generation if 1-head 2-rock 3-Scissors
the random number should be an int varable 
the function should return the output to the console log
*/
var Ran;
Ran = Math.floor(Math.random() * 3);
if (Ran == 0){
    console.log("Rock");
}
else if(Ran == 1){
    console.log("Paper");
}
else if(Ran == 2){
    console.log("Scissors");
}
}
function RPS(playerSelection, computerSelection){
/*
Get the player Selection
Use the getComputerChoice function for the computer selection
allow  playerSelection parameter case-insensitive
establish the winner of the round (Rock > Scissors) 
*/


}



