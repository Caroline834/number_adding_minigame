
let randomNum = document.getElementById('ranNum');
let numbers = document.getElementsByClassName('cell');
let equation = document.getElementById('equation');
let result = document.getElementById('result');
let gameStatus = document.getElementById('gameStatus');
let finished = false;

let random = () => { randomNum.innerHTML = Math.floor(Math.random() * 100) }

[...numbers].forEach(cell => {
    cell.addEventListener('click', e => {
        if(!finished){
        console.log(e.target.innerHTML);
        equation.innerHTML += (equation.innerHTML == "") ? e.target.innerHTML : "+" + e.target.innerHTML;
        result.innerHTML = Number(result.innerHTML) + Number(e.target.innerHTML);
        if (result.innerHTML == randomNum.innerHTML) {
            gameStatus.innerHTML = "you are correct!";
            return finished = true;
        } else if (Number(result.innerHTML) > Number(randomNum.innerHTML)) {
            gameStatus.innerHTML = "your are wrong!";
            return finished = true;
        }
    }
    })
});

playAgain.addEventListener('click',()=>{
    location.reload();
})