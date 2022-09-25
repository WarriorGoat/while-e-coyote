/*
 - prompt sync to get input from user
 - while loop double number each time and prints it out the result
 - loop ends when value exceeds 100
 - variable to hold the sum
 - += to add to our sum
 - reprompt inside the while loop
*/

const prompt = require('prompt-sync')({sigint: true});
let test = true
console.log("Please enter a string.");
let str1 = prompt(">>  ");
console.log(" ");
let str2 = str1

while (str1.length <10) {
        console.log(str1);
        str1 += str2;
    }
console.log(str1);