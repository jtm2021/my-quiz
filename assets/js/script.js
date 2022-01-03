const welcomePage = document.getElementById('welcomepage')
const startButton = document.getElementById('start-btn')
const gameArea = document.getElementById('game-area')
const questionBox = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answers')

startButton.addEventListener('click', ()=> {
    welcomePage.style.display = 'none'
    gameArea.style.display = 'grid'
})