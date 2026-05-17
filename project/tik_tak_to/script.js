const boxes = document.querySelectorAll(".box");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let gameOver = false;

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]
];

boxes.forEach((box)=>{

  box.addEventListener("click", ()=>{

    if(box.innerText !== "" || gameOver){
      return;
    }

    box.innerText = currentPlayer;

    checkWinner();

    if(gameOver){
      return;
    }
 

    if(currentPlayer === "X"){
      currentPlayer = "O";
    }else{
      currentPlayer = "X";
    }

    message.innerText = `Player ${currentPlayer} Turn`;

  });

});

function checkWinner(){

  for(let pattern of winPatterns){

    let value1 = boxes[pattern[0]].innerText;
    let value2 = boxes[pattern[1]].innerText;
    let value3 = boxes[pattern[2]].innerText;

    if(value1 !== "" && value1 === value2 && value2 === value3){

      message.innerText = `Player ${value1} Wins!`;
      gameOver = true;
      return;
    }
  }

  let filled = 0;

  boxes.forEach((box)=>{
    if(box.innerText !== ""){
      filled++;
    }
  });

  if(filled === 9){
    message.innerText = "Match Draw!";
    gameOver = true;
  }
}

resetBtn.addEventListener("click", ()=>{

  boxes.forEach((box)=>{
    box.innerText = "";
  });

  currentPlayer = "X";
  gameOver = false;

  message.innerText = "Player X Turn";

});