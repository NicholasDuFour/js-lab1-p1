"use strict";
/*-------Javascript Lab 1: Game------------------------------------------*/

{ /*Start of code block*/

let p = prompt("Do you want to play a game?");
if (p === "yes" || p === "Yes") {
let user = prompt("What is your character's name?");

let userWins = 0;
let grantWins = 0;
let userHealth = 40;
let grantHealth = 10;


while (userWins < 3 && grantWins < 1) {

  let random = (Math.floor(Math.random() * 2) + 1);
/*remove random number*/
  grantHealth = grantHealth - random;
  console.log(`Grant's health is at ${grantHealth}`);
  userHealth = userHealth - random;
  console.log(`${user}'s health is at ${userHealth}`);

  if (grantHealth <= 0 && userWins < 3) {
    grantHealth+= 10;
    userWins +=1;
    console.log(`${user} has won: ${userWins}`);
  }

  if (userHealth === 0) {
    grantWins += 1;
    console.log("Grant wins!");
    break;
  }

  if (userWins === 3) {
    console.log(`${user} wins!`);
    break;
  }

}/*End of while loop*/
} /*End of if statement*/

else {
  console.log("Goodbye!");
}


} /*Code block*/
