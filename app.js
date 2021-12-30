const startbtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timelist = document.querySelector('#timelist')
let time = 0
const time_l = document.querySelector('#time')
const board = document.querySelector('.board')
let score = 0
const colors = ['#5D737E', '#64B6AC', '#C0FDFB', '#DAFFEF', '#FCFFFD']


startbtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timelist.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        // console.log(time)
        screens[1].classList.add('up')
        start(time)
    }
})

function start(time) {    
    setTime(time)
    createCircle()
    setInterval(dec , 1000)

}

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createCircle()
    }
})

function dec() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

    
}

function setTime(current) {
    time_l.innerHTML = `00:${current}`
}

function finishGame() {
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
    // time_l.parentNode.remove()
    time_l.parentNode.classList.add('hide')
    
}

function createCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width , height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getColor()

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getColor() {
    index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function win() {
    circle = document.querySelector('.circle')
    circle.add
}