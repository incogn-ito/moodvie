console.log("test")

const prompts = [
  {
    id: 0,
    question: 'What movie are you in the mood for?',
    options: [
      {text: 'not sure', navigateToIdx: 1},
      {text: 'up for anything', navigateToIdx: 2},
      {text: 'not in the mood', navigateToIdx: 3},
      {text: 'i hate movies', navigateToIdx: 4}
    ]
  },
  {
    id: 1, // not sure
    question: 'What mood are you in?',
    options: [
      {text: 'anxious', navigateToIdx: 5},
      {text: 'bored', navigateToIdx: 2},
      {text: 'angry', navigateToIdx: 6},
      {text: 'happy', navigateToIdx: 2}
    ]
  },
  {
    id: 2, // up for anything
    question: "Which character would you choose to go on an adventure?",
    options: [
      {text: 'Butch Cassidy', navigateToIdx: 1},
      {text: 'Jobu Tupaki', navigateToIdx: 2},
      {text: 'Aragorn', navigateToIdx: 3},
      {text: 'Trinity', navigateToIdx: 4}
    ]
  },
  {
    id: 3, // not in the mood
    question: 'Which television character do you love to hate most?',
    options: [
      {text: 'Prince Joffrey', navigateToIdx: 1},
      {text: 'Nurse Ratched', navigateToIdx: 2},
      {text: 'Gus Fring', navigateToIdx: 3},
      {text: 'Villanelle', navigateToIdx: 4}    
    ]
  },
  {
    id: 4, // i hate movies
    question: "You lose... but you can pick another path.",
    options: [
      {text: 'Good Reads'},  // somehow link to Goodreads.com
      {text: 'Home', navigateToIdx: 1}
      // {text: 'Opt C', navigateToIdx: 3},
      // {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 5, // anxious
    question: "Which character would you choose to accompany on an adventure?",
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 6, // angry
    question: 'Which villain would you choose for an enemy?',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 7, // 
    question: "What character will you choose if you're",
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 8,
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 9,
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 10,
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },

]

const questionEl = document.querySelector('#question')
const buttonA = document.querySelector('#option-a')
const buttonB = document.querySelector('#option-b')
const buttonC = document.querySelector('#option-c')
const buttonD = document.querySelector('#option-d')


console.log(buttonA)
console.log(buttonD)

buttonA.addEventListener('click', handleClickButtonA)
buttonB.addEventListener('click', handleClickButtonB)
buttonC.addEventListener('click', handleClickButtonC)
buttonC.addEventListener('click', handleClickButtonD)


let currPromptIdx 
let currPrompt 

function init() {
  currPromptIdx = 0
  currPrompt = prompts[currPromptIdx]
  render()
}

init()

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
