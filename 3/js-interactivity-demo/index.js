const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const counter = document.querySelector('#counter')
const themeBtns = document.querySelector('.theme.btn')

let count = 0

function increase() {
    count++
    counterText.textContent = count
}

function decrease() {
    count--
    counterText.textContent = count
}

function reset(){
    count = 0
    counterText.textContent = count
}

plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

const selectTheme(event){
    for(let i = 0; i < themeBtns.clientHeight; i++){
        console.log(themeBtns[i])
    }
}