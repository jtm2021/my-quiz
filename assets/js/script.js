const welcomePage = document.getElementById('welcomepage')
const gameArea = document.getElementById('game-area')
const startButton = document.getElementById('start-btn')
const questionBox = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answers')
const nextButton = document.getElementById('next-btn')
const resetButton = document.getElementById('reset-btn')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
resetButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    launchNextQuestion()
})

function startGame () {
    resetButton.classList.remove('show')
    nextButton.classList.remove('hidebtn')
    welcomePage.style.display = 'none'
    gameArea.style.display = 'grid'
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    launchNextQuestion()
}

function launchNextQuestion() {
    resetState()
    if (currentQuestionIndex === questions.length) {
        resetButton.classList.add('show')
        nextButton.classList.add('hidebtn')
        questionElement.innerText = "Quiz done!"
    } else {
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', checkAnswer)
        answerElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

function checkAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {question: 'What is the capital of Albania?',
        answers: [{text:'Tirana', correct:true},{text:'London', correct:false},{text:'Dublin', correct:false},{text:'Baku', correct:false}]
    },
    {question: 'What is the capital of Andorra?',
        answers: [{text:'Yereven', correct:false},{text:'Tallin', correct:false},{text:'Minsk', correct:false},{text:'Andorra la Vella', correct:true}]
    },
    {question: 'What is the capital of Estonia?',
        answers: [{text:'Sarajevo', correct:false},{text:'Pristina', correct:false},{text:'Tallin', correct:true},{text:'Tbilisi', correct:false}]
    },
    {question: 'What is the capital of Latvia?',
        answers: [{text:'Riga', correct:true},{text:'Oslo', correct:false},{text:'Ankara', correct:false},{text:'Belgrade', correct:false}]
    },
    {question: 'What is the capital of Azerbaijan?',
        answers: [{text:'Baku', correct:true},{text:'Brusells', correct:false},{text:'Vilnius', correct:false},{text:'Rome', correct:false}]
    },
    {question: 'What is the capital of Belarus?',
        answers: [{text:'Budapest', correct:false},{text:'Minsk', correct:true},{text:'Helsinki', correct:false},{text:'Paris', correct:false}]
    },
    {question: 'What is the capital of Germany?',
        answers: [{text:'Valletta', correct:false},{text:'Pristina', correct:false},{text:'Berlin', correct:true},{text:'Athens', correct:false}]
    },
    {question: 'What is the capital of Italy?',
        answers: [{text:'Rome', correct:true},{text:'Chisinau', correct:false},{text:'Podgorica', correct:false},{text:'Monaco', correct:false}]
    },
    {question: 'What is the capital of Luxembourg?',
        answers: [{text:'Tirana', correct:false},{text:'London', correct:false},{text:'Dublin', correct:false},{text:'Luxembourg', correct:true}]
    },
    {question: 'What is the capital of Malta?',
        answers: [{text:'Sarajevo', correct:false},{text:'Prague', correct:false},{text:'Vaduz', correct:false},{text:'Valletta', correct:true}]
    },
    {question: 'What is the capital of Slovenia?',
        answers: [{text:'Stockholm', correct:false},{text:'Bern', correct:false},{text:'Ljubljana', correct:true},{text:'Vatican', correct:false}]
    },
    {question: 'What is the capital of Slovakia?',
        answers: [{text:'Bratislava', correct:true},{text:'Ankara', correct:false},{text:'Kyiv', correct:false},{text:'San Marino', correct:false}]
    }
]