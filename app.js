let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let turn = Math.random() < 0.5 ? 'O' : 'X';
let newBtn = document.querySelector('#new');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.querySelector('#msg');
let cnt = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [3, 4, 5]
];
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        cnt++;
        box.innerText = turn;
        box.style.backgroundColor = '#ffffc7';
        if(turn == 'O') {
            turn = 'X';
        } else {
            turn = 'O';
        }
        box.disabled  = true;
        checkWinner();
    });
});
const checkWinner = () => {
    for(let i of winPatterns) {
        let pos1Val = boxes[i[0]].innerText;
        let pos2Val = boxes[i[1]].innerText;
        let pos3Val = boxes[i[2]].innerText;
        if(pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if(pos1Val == pos2Val && pos1Val == pos3Val) {
                msg.innerText = `Congratulations, Winner is ${pos1Val}`;
                msgContainer.classList.remove("hide");
                for(let box of boxes) {
                    box.disabled = true;
                }
            } else if(cnt == 9) {
                msg.innerText = 'Draw.';
                msgContainer.classList.remove("hide");
            }
        }
    }
};
const Game = () => {
    turn = Math.random() < 0.5 ? 'O' : 'X';
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = '';
    }
    msgContainer.classList.add("hide");
}
newBtn.addEventListener("click", Game);
reset.addEventListener("click", Game);