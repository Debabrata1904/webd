const result = document.querySelector('#result');

function add1() {
    result.innerText++;
}

const subtract1 = () => {
    result.innerText--;
}

const add1Button = document.querySelector('#add');
add1Button.addEventListener('click', add1);

const subtract1Button = document.querySelector('#subtract');
subtract1Button.addEventListener('click', subtract1);

let dummy
const hover = document.querySelector('#hover');
hover.addEventListener('mouseover', () => {
    dummy = result.innerText;
    result.innerText = 'Hovering!';
});
hover.addEventListener('mouseout', () => {
    result.innerText = dummy;
});

const div = document.querySelector('#test');
//div.addEventListener('click', (event) => {
//    event.target // the actual element which caused the event
//    event.type // tells the type of event
//    event.preventDefault // stops the default behaviour of the browser
//    event.stopPropagation // stops event to propogate to parent elements
//});

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

div.addEventListener('click', (event) => {
    event.target.style.backgroundColor = getRandomColor();
});
