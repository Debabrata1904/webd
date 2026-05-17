console.log("My name is Debabrata");
let a = 5;
const constant = 21;
var name = "Debabrata"; // legacy variable declaration, avoid using it in modern JavaScript
console.log("The constant value is: " + constant);

// constant = 30;
// console.log("The constant value is: " + constant);

{
    let course = "cda-208"
console.log(course);
}

// data types - integer, decimal, Nan, char, object, array, 

const obj = {
    name: "Debabrata",
    age: 25,
    isStudent: true,
    gender: "Male",
    fnx: () => {
        console.log("This is a function inside an object");
    }
};

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.isStudent);
console.log(obj.gender);
obj.fnx();