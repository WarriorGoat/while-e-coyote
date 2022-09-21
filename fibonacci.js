const prompt = require('prompt-sync')({sigint: true});

console.log("Please enter the number of the progression of the Fibonacci sequence you'd like to see.");
let x = Number(prompt(">>  "))
console.log(`You entered ${x}.  Here's your Fibonacci sequence.`);

let i = 0
let n1 = 0
let n2 = 1
let n3 = n1 + n2

console.log(n1);
console.log(n2);
console.log(n3);

while (i < (x+1)) {
    n1 = n2
    n2 = n3 
    n3 = n1 + n2
    i++;
    console.log(n3);
}  //The key is to only repeat the number swap, the addition and printing the sum, not printing all the variables.  the initial values are printed outside the while loop.