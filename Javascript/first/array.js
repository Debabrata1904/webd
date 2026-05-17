let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

let mixed = [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length, numbers.length);

fruits.push("grape");   // adds a new element at the end
console.log(fruits);

fruits.pop();       // removes the last element
console.log(fruits);

fruits.shift();     // removes the first element
console.log(fruits);
// for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// while loop
let a = 0;

while(a <= 5) {
    console.log(a++);
}

//for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach loop
function printval(value) {
    console.log(value);
}
// forEach loop
fruits.forEach((value) => printval(value));

// do...while loop
let b = 0;

do {
    console.log(b++);
} while (b <= 5);


// for...in loop
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}