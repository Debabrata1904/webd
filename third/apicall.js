// Api call using promises
/*
function getData() {
    const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}

getData();  */


// Api call using async await
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getData();