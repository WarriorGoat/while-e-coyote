/*
 - prompt sync to get input from user
 - while loop allows user to input multiple numbers
 - print out the sum at the end
 - variable to hold the sum
 - += to add to our sum
 - reprompt inside the while loop
*/

const prompt = require('prompt-sync')({sigint: true});
let test = false

console.log("This program will add numbers you enter until you enter a zero to stop the program.");
let sum = Number(prompt("Please enter the first number.  >>  "));
console.log(`You entered: ${sum}`);
if (sum >0) {
    test = true;
}
let number = 0

while (test === true) {
    console.log(" ");
    console.log(`Please enter the next number to add to the total.  You may enter zero to stop the program.`);
    number = Number(prompt(`>>`));
    console.log(`You entered: ${number}`);
    if (number >0) {
        test = true;
    }else {test = false};
    console.log(`The sum of ${sum} and ${number} is:  `);
    sum = number + sum;
    console.log(sum);
    console.log(" ");
}
