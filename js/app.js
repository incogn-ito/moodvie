console.log("test")
/*-------------------------------- Constants --------------------------------*/

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
      {text: 'nostalgic', navigateToIdx: 5},
      {text: 'bored', navigateToIdx: 2},
      {text: 'frustrated', navigateToIdx: 6},
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
    question: "You lose... but you can pick a new path.",
    options: [
      {text: 'Good Reads', navigateToIdx: 3},  /// somehow link to Goodreads.com?????????????
      {text: '', navigateToIdx: 3},
      {text: '', navigateToIdx: 3},
      {text: '', navigateToIdx: 3} /// how do I remove buttons 
    ]
  },
  {
    id: 5, // nostalgic
    question: "You're going on a journey. Which character will you choose to be?",
    options: [
      {text: 'Luke Skywalker', navigateToIdx: 8},
      {text: 'Harley Quinn', navigateToIdx: 7}, // fantasy
      {text: 'Forest Gump', navigateToIdx: 9},
      {text: 'Elle Woods', navigateToIdx: 10}
    ]
  },
  {
    id: 6, // frustrated
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

// synopsis credit: imdb.com and AFI.com

const itoLeonMovies = [
  {
    id: 0,
    theme: 'Fantasy',
    title: 'Lord of the Rings',
    synopsis: 'A mighty wizard leads a reluctant band of men, hobbits, a dwarf, and an elf on a terrifying quest to destroy the One Ring before an ancient evil god becomes manifest and destroys all Middle-Earth.',
    director: 'Peter Jackson',
    
  },
  {
    id: 1,
    theme: 'Fantasy',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    synopsis: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
    director: 'Chris Columbus',
    
  },
  {
    id: 2,
    theme: 'Action',
    title: 'Die Hard',
    synopsis: 'A New York City cop travels to Los Angeles to reconcile with his wife but learns she\'s been taken hostage by terrorist in a skyscraper.',  
    director: 'John McTiernan',
  },
{
  id: 3,
  theme: 'Family',
  title: 'Anne of Green Gables (1985)',
  synopsis: 'An orphan girl, sent to an elderly brother and sister by mistake, charms her new home and community with her fiery spirit and imagination.',
  director: 'Kevin Sullivan',
},
,
{
  id: 4,
  theme: 'Drama',
  title: 'Past Lives',
  synopsis: 'Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora\'s family emigrates from South Korea. Two decades later, they are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life, in this heartrending modern romance.',
  director: 'Celine Song',
},
{
  id: 5,
  theme: 'Drama ',
  title: 'Shawshank Redemption',
  synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  director: 'Frank Darabont',
},
{
  id: 6,
  theme: 'Action',
  title: 'Bourne Identity',
  synopsis: 'A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.',
  director: 'Doug Liman',
},
{
  id: 7,
  theme: 'Action',
  title: 'Dark Knight',
  synopsis: '',
  director: 'Christopher Nolan'
},
{
  id: 8,
  theme: 'Action',
  title: 'Attack the Block',
  synopsis: '',
  director: 'Peter Jackson'
},
{
  id: 9,
  theme: 'Animation',
  title: 'Spiderman: Into the Spiderverse',
  synopsis: '',
  director: 'Peter Jackson'
},

]

const afiMovies = [

  // Animation
  {
    id: 0,
    theme: "Animation",
    title: "Snow White and the Seven Dwarfs (1937)",
    synopsis: "A princess is pursued by a jealous queen and finds refuge with seven dwarfs.",
    director: "David Hand"
  },
  {
    id: 1,
    theme: "Animation",
    title: "Pinocchio (1940)",
    synopsis: "A wooden puppet dreams of becoming a real boy.",
    director: "Ben Sharpsteen, Hamilton Luske"
  },
  {
    id: 2,
    theme: "Animation",
    title: "Bambi (1942)",
    synopsis: "A young deer grows up in the forest.",
    director: "David Hand"
  },
  {
    id: 3,
    theme: "Animation",
    title: "The Lion King (1994)",
    synopsis: "A young lion prince flees his kingdom after the murder of his father.",
    director: "Roger Allers, Rob Minkoff"
  },
  {
    id: 4,
    theme: "Animation",
    title: "Fantasia (1940)",
    synopsis: "A collection of animated interpretations of great works of Western classical music.",
    director: "Multiple Directors"
  },
  {
    id: 5,
    theme: "Animation",
    title: "Toy Story (1995)",
    synopsis: "A cowboy doll feels threatened when a new spaceman figure supplants him as top toy.",
    director: "John Lasseter"
  },
  {
    id: 6,
    theme: "Animation",
    title: "Beauty and the Beast (1991)",
    synopsis: "A young woman falls in love with a prince who is transformed into a beast.",
    director: "Gary Trousdale, Kirk Wise"
  },
  {
    id: 7,
    theme: "Animation",
    title: "Shrek (2001)",
    synopsis: "An ogre falls in love with a princess while on a quest to save her.",
    director: "Andrew Adamson, Vicky Jenson"
  },
  {
    id: 8,
    theme: "Animation",
    title: "Cinderella (1950)",
    synopsis: "A young woman is transformed into a princess with the help of her fairy godmother.",
    director: "Wilfred Jackson, Hamilton Luske, Clyde Geronimi"
  },
  {
    id: 9,
    theme: "Animation",
    title: "Finding Nemo (2003)",
    synopsis: "A father clownfish searches for his missing son.",
    director: "Andrew Stanton"
  },
  
  // Romantic Comedy
  {
    id: 10,
    theme: "Romantic Comedy",
    title: "City Lights (1931)",
    synopsis: "A tramp falls in love with a blind girl and tries to earn money for her eye surgery.",
    director: "Charles Chaplin"
  },
  {
    id: 11,
    theme: "Romantic Comedy",
    title: "Annie Hall (1977)",
    synopsis: "A neurotic New York comedian falls in love with a quirky woman.",
    director: "Woody Allen"
  },
  {
    id: 12,
    theme: "Romantic Comedy",
    title: "It Happened One Night (1934)",
    synopsis: "A spoiled heiress falls in love with a roguish reporter during a cross-country trip.",
    director: "Frank Capra"
  },
  {
    id: 13,
    theme: "Romantic Comedy",
    title: "Roman Holiday (1953)",
    synopsis: "A princess falls in love with a reporter during a visit to Rome.",
    director: "William Wyler"
  },
  {
    id: 14,
    theme: "Romantic Comedy",
    title: "The Philadelphia Story (1940)",
    synopsis: "A socialite's wedding plans are complicated by the arrival of her ex-husband and a reporter.",
    director: "George Cukor"
  },
  {
    id: 15,
    theme: "Romantic Comedy",
    title: "When Harry Met Sally... (1989)",
    synopsis: "Two friends question whether men and women can ever just be friends.",
    director: "Rob Reiner"
  },
  {
    id: 16,
    theme: "Romantic Comedy",
    title: "Adam's Rib (1949)",
    synopsis: "A husband and wife lawyer couple find themselves on opposite sides of a court case.",
    director: "George Cukor"
  },
  {
    id: 17,
    theme: "Romantic Comedy",
    title: "Moonstruck (1987)",
    synopsis: "A widowed Brooklyn bookkeeper falls in love with her fiancé's estranged brother.",
    director: "Norman Jewison"
  },
  {
    id: 18,
    theme: "Romantic Comedy",
    title: "Harold and Maude (1971)",
    synopsis: "A young man obsessed with death falls in love with a lively septuagenarian.",
    director: "Hal Ashby"
  },
  {
    id: 19,
    theme: "Romantic Comedy",
    title: "Sleepless in Seattle (1993)",
    synopsis: "A recently widowed man's son calls a radio talk show in an attempt to find his father a partner.",
    director: "Nora Ephron"
  },

  // Western
  {
    id: 20,
    theme: "Western",
    title: "The Searchers (1956)",
    synopsis: "A Civil War veteran embarks on a quest to rescue his niece from Comanches.",
    director: "John Ford"
  },
  {
    id: 21,
    theme: "Western",
    title: "High Noon (1952)",
    synopsis: "A town marshal must face a gang of killers alone.",
    director: "Fred Zinnemann"
  },
  {
    id: 22,
    theme: "Western",
    title: "Shane (1953)",
    synopsis: "A mysterious drifter helps a homestead family against a cattle baron.",
    director: "George Stevens"
  },
  {
    id: 23,
    theme: "Western",
    title: "Unforgiven (1992)",
    synopsis: "A retired gunslinger takes on one last job to help a struggling widow.",
    director: "Clint Eastwood"
  },
  {
    id: 24,
    theme: "Western",
    title: "Red River (1948)",
    synopsis: "A cattle drive turns into a confrontation between a father and his adopted son.",
    director: "Howard Hawks"
  },
  {
    id: 25,
    theme: "Western",
    title: "The Wild Bunch (1969)",
    synopsis: "An aging outlaw gang tries to make one last big score.",
    director: "Sam Peckinpah"
  },
  {
    id: 26,
    theme: "Western",
    title: "Butch Cassidy and the Sundance Kid (1969)",
    synopsis: "Two outlaws escape to Bolivia after a series of train robberies.",
    director: "George Roy Hill"
  },
  {
    id: 27,
    theme: "Western",
    title: "McCabe & Mrs. Miller (1971)",
    synopsis: "A gambler and a prostitute form a business partnership in a remote mining town.",
    director: "Robert Altman"
  },
  {
    id: 28,
    theme: "Western",
    title: "Stagecoach (1939)",
    synopsis: "A group of travelers journey through dangerous territory in a stagecoach.",
    director: "John Ford"
  },
  {
    id: 29,
    theme: "Western",
    title: "Cat Ballou (1965)",
    synopsis: "A schoolteacher turns outlaw to avenge her father's murder.",
    director: "Elliot Silverstein"
  },

  // Sports
  {
    id: 30,
    theme: "Sports",
    title: "Raging Bull (1980)",
    synopsis: "The life of boxer Jake LaMotta, whose violence and temper led him to the top in the ring and destroyed his life outside it.",
    director: "Martin Scorsese"
  },
  {
    id: 31,
    theme: "Sports",
    title: "Rocky (1976)",
    synopsis: "A small-time boxer gets a chance to fight a heavyweight champion in a bout.",
    director: "John G. Avildsen"
  }
]

/*------------------------ Cached Element References ------------------------*/

const questionEl = document.querySelector('#question')
const buttonA = document.querySelector('#option-a')
const buttonB = document.querySelector('#option-b')
const buttonC = document.querySelector('#option-c')
const buttonD = document.querySelector('#option-d')
const resetBtnEl = document.querySelector('#reset')

console.log(buttonA)
console.log(buttonD)

/*---------------------------- Variables (state) ----------------------------*/

let currPromptIdx 
let currPrompt 


/*----------------------------- Event Listeners -----------------------------*/

buttonA.addEventListener('click', handleClickButtonA)
buttonB.addEventListener('click', handleClickButtonB)
buttonC.addEventListener('click', handleClickButtonC)
buttonD.addEventListener('click', handleClickButtonD)
resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

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
