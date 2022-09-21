/*
 - prompt sync to get input from user
 - while loop allows user to input multiple numbers
 - print out the sum at the end
 - variable to hold the sum
 - += to add to our sum
 - reprompt inside the while loop
*/

const prompt = require('prompt-sync')({sigint: true});

console.log("Please enter a number from 1-100 to double.");
let number = Number(prompt(">>  "));
//let sum = 0
while (number <= 100) {
    number = number *2;
    console.log(number);
    
}
//console.log(`Your total is ${sum}.`)