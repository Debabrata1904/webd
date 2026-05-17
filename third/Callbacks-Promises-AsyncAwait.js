console.log("Hello, World!");
/*
// simulation
// ISSUE with async programming: the function returns before the data is available
function dbcall() {
    setTimeout(() => {
        console.log("Db call Successful");
        const data = { name: "Debabrata Bhowmik", age: 25, country: "India" };
        return data;
    }, 1000);
}

const data = dbcall(); // data will be undefined because dbcall is asynchronous and returns before the data is available
console.log(data);  // Output: undefined
*/
// How to fix this issue?
// 1. Callbacks
// 2. Promises
// 3. Async/Await

/*
// Callback
function dbcall(callback) {
    setTimeout(() => {
        console.log("Db call Successful");
        const data = { name: "Debabrata Bhowmik", age: 25, country: "India" };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log("User Data: " + JSON.stringify(data));
}

dbcall(displayData);
*/


// Promises

function dbcall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Success
            console.log("Db call Successful");
            const data = { name: "Debabrata Bhowmik", age: 25, country: "India" };
            resolve(data);
            // Failure
            reject("Db call Failed");
        }, 2000);
    });
}
/*
const para = document.getElementsByTagName("p")[0];

// Using the promise
dbcall().then((data) => {
    //console.log("User Data: " + JSON.stringify(data));
    para.textContent = "User Data: " + JSON.stringify(data);
}).catch((error) => {
    para.textContent = "Error: " + error;
});
console.log("Hello world after promise");
*/


// Async/Await

async function fxn() {
    const data =  await dbcall();
    console.log("User Data: " + JSON.stringify(data));
    console.log("Hello world after async/await");
}

fxn();