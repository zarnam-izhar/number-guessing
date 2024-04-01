//! usr/bin/env node
import inquirer from "inquirer";

//1 computer will generate a random number
// 2) user input for guessing no.
// 3) compare user input with computer generated no. and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to my number guessing game");

const answer = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6 : ",
},
]);
if(answer.userGuessedNumber === randomNumber){
console.log("congratulation you guessed correct")
}else {
console.log("You guessed wrong");
}