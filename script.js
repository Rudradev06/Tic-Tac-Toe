let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-game-btn");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.style.color = "#185519";
            box.innerText = "O";
            turnO = false;
        }else {
            box.style.color = "#B8001F";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })  
})

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

function showWinner(winner){
    message.innerText =`Congratulations! ${winner} won the match`;
    msgContainer.classList.remove("hide");
    for(btn of boxes){
        btn.disabled = true;
    }
}

function checkWinner(){
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
            }
        }
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);