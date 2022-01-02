const gameArea = document.getElementsByClassName('game-area')
const welcomePage = document.getElementsByClassName('welcomepage')
const startButton = document.getElementsByClassName('start-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementsByClassName('question')
const answerButtonsElement = document.getElementsByClassName('answer-buttons')
const scoreArea = document.getElementsByClassName('score-area')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', ()=> {
    welcomePage.style.display = 'none'
    gameArea.style.display = 'grid'
})

function runGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionBoxElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    launchNextQuestion()
}

function launchNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function checkAnswer() {

}

const questions = [
    {
        question: 'What is the capital of Albania',
        answers: [
            { text: 'Tirana', correct: true },
            { text: 'London', correct: false }
        ]
    }

]

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}