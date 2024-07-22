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
      {text: 'sad', navigateToIdx: 5},
      {text: 'bored', navigateToIdx: 2},
      {text: 'angry', navigateToIdx: 6},
      {text: 'happy', navigateToIdx: 2}
    ]
  },
  {
    id: 2, // up for anything
    question: "You're going on an adventure. Which character would you choose?",
    options: [
      {text: 'Butch Cassidy', navigateToIdx: 1},
      {text: 'Jobu Tupaki', navigateToIdx: 6},
      {text: 'Aragorn', navigateToIdx: 3},
      {text: 'Trinity', navigateToIdx: 6}
    ]
  },
  {
    id: 3, // not in the mood
    question: 'How about television? Which TV character do you love to hate most?',
    options: [
      {text: 'Prince Joffrey', navigateToIdx: 1},
      {text: 'Nurse Ratched', navigateToIdx: 2},
      {text: 'Gus Fring', navigateToIdx: 3},
      {text: 'Villanelle', navigateToIdx: 4}    
    ]
  },
  {
    id: 4, // i hate movies
    question: "You lose... but you can still pick a new path.",
    options: [
      {text: 'Good Reads', navigateToIdx: 0},  /// somehow link to Goodreads.com?????????????
      {text: 'Back Home', navigateToIdx: 0},
      {text: '', navigateToIdx: 3},
      {text: '', navigateToIdx: 4} /// how do I remove buttons 
    ]
  },
  {
    id: 5, // sad
    question: "You're going on a journey. Which character will you choose to be?",
    options: [
      {text: 'Luke Skywalker', navigateToIdx: 8},
      {text: 'Harley Quinn', navigateToIdx: 7}, // fantasy
      {text: 'Forest Gump', navigateToIdx: 9},
      {text: 'Elle Woods', navigateToIdx: 10}
    ]
  },
  {
    id: 6, // angry
    question: 'Which villain will you choose as your nemesis?',
    options: [
      {text: 'Thanos', navigateToIdx: 7},
      {text: 'Regina George', navigateToIdx: 2},
      {text: 'Hannibal Lecter', navigateToIdx: 3},
      {text: 'Hans Landa', navigateToIdx: 7}
    ]
  },
  {
    id: 7, // harley quinn
    question: "What tool will you choose to bring with you?",
    options: [
      {text: 'Baseball bat', navigateToIdx: 10},
      {text: 'Samurai sword', navigateToIdx: 11},
      {text: "Thor's hammer", navigateToIdx: 10},
      {text: 'Light saber', navigateToIdx: 11}
    ]
  },
  {
    id: 8, //luke skywalker 
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 9, // james bond
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 10, // bat + sword
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 11, //
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 12, // 
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 13, // 
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  },
  {
    id: 14, // 
    question: '',
    options: [
      {text: 'Opt A', navigateToIdx: 1},
      {text: 'Opt B', navigateToIdx: 2},
      {text: 'Opt C', navigateToIdx: 3},
      {text: 'Opt D', navigateToIdx: 4}
    ]
  }

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
buttonD.addEventListener('click', handleClickButtonD)


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
