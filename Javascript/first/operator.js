// equal to operator works defferently in javascript

let a = 5;
let string_a = "5";

console.log(a == string_a);
console.log(a === string_a);

// == double equal -> only check for value, doesn't check data type
// === triple equal -> check for value and data type both

console.log(a++);
console.log(a);

console.log(++a);
console.log(a);

// logical operators -> &&, ||, !

// ternary operator -> condition ? true : false

let result = (a == 7) ? 10 : 20; // if else
console.log(result);


let age = 18;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote.";
console.log(canVote);

