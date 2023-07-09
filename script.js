console.log("welcome to tic tac toe.")
let move = new Audio("./Audio/Click.mp3")
let wrongMove = new Audio("./Audio/wrongMove.mp3")
let winner = new Audio("./Audio/winner.mp3")
let turn = "X"
let isgameover = false
//changing turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}
//check function
const checkWin = () => {
    let boxtext = document.getElementsByClassName("textbox");
    let wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    wins.forEach(e => {
        if (((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won"
            winner.play();
            isgameover = true
            document.querySelector('.imagebox').getElementsByClassName("img")[0].style.width = "100px"
        }
    })
}
//logic game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.textbox');
    element.addEventListener('click', () => {
        if (!isgameover) {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                turn = changeTurn();
                
                checkWin();
                move.play();
                if (!isgameover) {
                    document.getElementsByClassName('turn')[0].innerText = 'Turn for ' + turn;
                }
            }
            else wrongMove.play();
        }
    })
})
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.textbox')
    Array.from(boxtext).forEach(element => { element.innerText = "" });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px";
})
