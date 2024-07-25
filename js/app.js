console.log('test')

/*--------------------------------- Imports ----------------------------------*/


import { prompts, moviesWithArtwork} from "./data.js"

/*------------------------ Cached Element References ------------------------*/

const buttonA = document.querySelector('#option-a')
const buttonB = document.querySelector('#option-b')
const buttonC = document.querySelector('#option-c')
const buttonD = document.querySelector('#option-d')
const resetBtnEl = document.querySelector('#reset')

const happy = document.querySelector('#mood-1')
const sad = document.querySelector('#mood-2')
const frustrated = document.querySelector('#mood-3')
const playful = document.querySelector('#mood-4')
const startBtn = document.querySelector('.start')

const landingContainer = document.getElementById('landing')
const moodsContainer = document.getElementById('moods')
const quizContainer = document.getElementById('quiz')
const promptsContainer = document.getElementById('prompts')
const messageContainer = document.getElementById('message')

const questionEl = document.querySelector('#question')
const messageEl = document.querySelector('#message')
const questionImg = document.querySelector('#question-img')
const messageImg = document.querySelector('#message-img')

console.log(buttonA)
console.log(buttonD)

/*---------------------------- Variables (state) ----------------------------*/

let currPromptIdx, currPrompt, playerChoice, selectedPrompts


/*----------------------------- Event Listeners -----------------------------*/

buttonA.addEventListener('click', handleClickButtonA)
buttonB.addEventListener('click', handleClickButtonB)
buttonC.addEventListener('click', handleClickButtonC)
buttonD.addEventListener('click', handleClickButtonD)
resetBtnEl.addEventListener('click', init)
startBtn.addEventListener('click', displayMoodsSelection)

/*-------------------------------- Functions --------------------------------*/

// function init() {
//   currPromptIdx = 0
//   currPrompt = prompts[currPromptIdx]
//   render()
// }

init()

function init() {
  currPromptIdx = 0
  landingContainer.style.display = ''
  moodsContainer.style.display = 'none'
  quizContainer.style.display = 'none'
  messageContainer.style.display = 'none'
  console.log(currPromptIdx, selectedPrompts)
}

function displayMoodsSelection() {
  moodsContainer.style.display = ''
  landingContainer.style.display = 'none'
}

function render() {
  questionEl.textContent = currPrompt.question
  buttonA.textContent = currPrompt.options[0].text
  buttonB.textContent = currPrompt.options[1].text
  buttonC.textContent = currPrompt.options[2].text
  buttonD.textContent = currPrompt.options[3].text
}

function handleClickButtonA() {
  currPromptIdx = currPrompt.options[0].navigateToIdx
  currPrompt = prompts[currPromptIdx]
  render()
}

function handleClickButtonB() {
  currPromptIdx = currPrompt.options[1].navigateToIdx
  currPrompt = prompts[currPromptIdx]
  render()
}

function handleClickButtonC() {
  currPromptIdx = currPrompt.options[2].navigateToIdx
  currPrompt = prompts[currPromptIdx]
  render()
}

function handleClickButtonD() {
  currPromptIdx = currPrompt.options[3].navigateToIdx
  currPrompt = prompts[currPromptIdx]
  render()
}
