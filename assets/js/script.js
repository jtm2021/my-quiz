const welcomePage = document.getElementById('welcomepage')
const startButton = document.getElementById('start-btn')
const gameArea = document.getElementById('game-area')
const questionBox = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answers')
const answers = document.querySelectorAll('answer')
const buttonNext = document.querySelector('.btn_next')
const scoreSpan = document.getElementById('correct')

let shuffledQuestions, currentQuestionIndex

const questions = [
    {question: 'What is the capital of Albania?',
        answers: [{text:'Tirana', isAnswer:true},{text:'London', isAnswer:false},{text:'Dublin', isAnswer:false},{text:'Baku', isAnswer:false}]
    },
    {question: 'What is the capital of Andorra?',
        answers: [{text:'Yereven', isAnswer:false},{text:'Tallin', isAnswer:false},{text:'Minsk', isAnswer:false},{text:'Andorra la Vella', isAnswer:true}]
    },
    {question: 'What is the capital of Estonia?',
        answers: [{text:'Sarajevo', isAnswer:false},{text:'Pristina', isAnswer:false},{text:'Tallin', isAnswer:true},{text:'Tbilisi', isAnswer:false}]
    },
    {question: 'What is the capital of Latvia?',
        answers: [{text:'Riga', isAnswer:true},{text:'Oslo', isAnswer:false},{text:'Ankara', isAnswer:false},{text:'Belgrade', isAnswer:false}]
    },
    {question: 'What is the capital of Azerbaijan?',
        answers: [{text:'Baku', isAnswer:true},{text:'Brusells', isAnswer:false},{text:'Vilnius', isAnswer:false},{text:'Rome', isAnswer:false}]
    },
    {question: 'What is the capital of Belarus?',
        answers: [{text:'Budapest', isAnswer:false},{text:'Minsk', isAnswer:true},{text:'Helsinki', isAnswer:false},{text:'Paris', isAnswer:false}]
    },
    {question: 'What is the capital of Germany?',
        answers: [{text:'Valletta', isAnswer:false},{text:'Pristina', isAnswer:false},{text:'Berlin', isAnswer:true},{text:'Athens', isAnswer:false}]
    },
    {question: 'What is the capital of Italy?',
        answers: [{text:'Rome', isAnswer:true},{text:'Chisinau', isAnswer:false},{text:'Podgorica', isAnswer:false},{text:'Monaco', isAnswer:false}]
    },
    {question: 'What is the capital of Luxembourg?',
        answers: [{text:'Tirana', isAnswer:false},{text:'London', isAnswer:false},{text:'Dublin', isAnswer:false},{text:'Luxembourg', isAnswer:true}]
    },
    {question: 'What is the capital of Malta?',
        answers: [{text:'Sarajevo', isAnswer:false},{text:'Prague', isAnswer:false},{text:'Vaduz', isAnswer:false},{text:'Valletta', isAnswer:true}]
    },
    {question: 'What is the capital of Slovenia?',
        answers: [{text:'Stockholm', isAnswer:false},{text:'Bern', isAnswer:false},{text:'Ljubljana', isAnswer:true},{text:'Vatican', isAnswer:false}]
    },
    {question: 'What is the capital of Slovakia?',
        answers: [{text:'Bratislava', isAnswer:true},{text:'Ankara', isAnswer:false},{text:'Kyiv', isAnswer:false},{text:'San Marino', isAnswer:false}]
    }
]
startButton.addEventListener('click', startGame)
buttonNext.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame () {
    welcomePage.style.display = 'none'
    gameArea.style.display = 'grid'
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    launchNextQuestion()
}

function launchNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.isAnswer) {
            button.dataset.isAnswer = answer.isAnswer
        }
        button.addEventListener('click', selectAnswer)
        answerElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    buttonNext.classList.add('hide')
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

function checkAnswer() {
    const selectedButton = e.target
    const isAnswer = selectedButton.dataset.isAnswer
    setStatusClass(document.body, isAnswer)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.isAnswer)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        buttonNext.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, isAnswer) {
    clearStatusClass(element)
    if (isAnswer) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}