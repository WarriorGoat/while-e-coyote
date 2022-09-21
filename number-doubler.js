/*
 - prompt sync to get input from user
 - while loop double number each time and prints it out the result
 - loop ends when value exceeds 100
 - variable to hold the sum
 - += to add to our sum
 - reprompt inside the while loop
*/

const prompt = require('prompt-sync')({sigint: true});

console.log("Please enter a number from 1-100 to double.");
let number = Number(prompt(">>  "));

while (number >= 0 && number <= 100) {
    number = number *2;
    console.log(number);
}
