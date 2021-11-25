const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 0
let score = 0
const timeText = document.querySelector('#time')
const board = document.querySelector('#board')

startBtn.addEventListener('click',(event) =>{
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click',(event) =>{
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }
})

board.addEventListener('click',(event) =>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame(){
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    screens[1].classList.add('up')
} 

function decreaseTime(){
    if(time === 0){
        finishGame()
    }
    else{
        let currentTime = --time
        if(currentTime < 10){
            timeText.innerHTML = `00:0${currentTime}`
        }
        else{
            timeText.innerHTML = `00:${time}`
        }
    }
}

function finishGame(){
    timeText.parentNode.classList.add('hide')
    board.innerHTML = `<h1>счёт: <span class = "primary">${score}</span></h1>`
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const {width,height} = board.getBoundingClientRect()

    const x = getRandomNumber(0, width-size)
    const y = getRandomNumber(0, height-size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function getRandomNumber(min,max){
    return Math.round(Math.random() * (max-min)+min)
}
