const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progessText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: 'What is 2+2 ?',
    choice1: '5',
    choice2: '4',
    choice3: '6',
    choice4: '12',
    answer: 2,
  },
  {
    question: 'What is the capital of Belgium ?',
    choice1: 'Antwerp',
    choice2: 'Paris',
    choice3: 'Brussels',
    choice4: 'Bruges',
    answer: 3,
  },
  {
    question: 'How many days do you have in February ?',
    choice1: '30',
    choice2: '29',
    choice3: '28',
    choice4: '31',
    answer: 3,
  },
  {
    question: 'What is 6+7 ?',
    choice1: '13',
    choice2: '22',
    choice3: '31',
    choice4: '43',
    answer: 1,
  }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  if(availableQuestions.lenght === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
  }
}
