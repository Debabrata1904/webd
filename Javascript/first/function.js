// named function
function fxn(x){
    console.log(x);
    let sq = x*x;
    return sq;
}

// unnamed function
let unnamedfxn = (x) => {
    console.log("Debabrata");
    return x+10;
}

fxn(9);

let result = unnamedfxn(5);
console.lo

// forEach -> method
fruits = ["apple", "banana", "grapes"];

fruits.forEach((item) => {
    console.log(item);
})