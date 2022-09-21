const prompt = require('prompt-sync')({sigint: true});

console.log("Please enter two numbers (X and Y for the divisible game:");
let x = Number(prompt(">>  "))
console.log(`You entered ${x}.  Please enter a second number:`);
let y = Number(prompt(">>  "))
console.log(`You entered ${y}.`);
let r = 10
let n = 0
while (r>0) {
    r = (x + n) % y;
    console.log("Your initial number X = " + (x+n));
    console.log("Your initial numer Y = " + y);
    console.log("X divided by Y leaves a remainder r = " + r);
    n=n+1;
    console.log("This is attempt number n = " + n);
    console.log("   ");
    
}