let boxes = document.querySelectorAll("#box");
let restart = document.querySelector("#restart-button");
let NewGameButton = document.querySelector("#new-btn");
let mascontainer = document.querySelector(".Mascontainer");
let mas = document.querySelector("#mas");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];

const restartGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    mascontainer.classList.add("hide");

};



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner = chackwinner();
        if (count === 9 && !iswinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    mas.innerHTML = "game was a draw";
    mascontainer.classlist.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    //  mas.innerHTML=winner ,pos1val;
    mascontainer.classList.remove("hide");
    disableBoxes();
};



const chackwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {

                showwinner(pos1val);
                return true;
            }
        }
    }
};


NewGameButton.addEventListener("click", restartGame);
restart.addEventListener("click", restartGame);





