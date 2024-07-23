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
  synopsis: 'A teen gang in South London defend their block from an alien invasion.',
  director: 'Joe Cornish'
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

  {
    id: 0,
    title: "Braveheart",
    theme: ["Biography", "Drama", "History"],
    synopsis: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England."
},
{
    id: 1,
    title: "The Help",
    theme: ["Drama"],
    synopsis: "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work, and the hardships they go through on a daily basis."
},
{
    id: 2,
    title: "The Game",
    theme: ["Drama", "Mystery", "Thriller"],
    synopsis: "After a wealthy San Francisco banker is given an opportunity to participate in a mysterious game, his life is turned upside down as he begins to question if it might really be a concealed conspiracy to destroy him."
},
{
    id: 3,
    title: "Spotlight",
    theme: ["Biography", "Crime", "Drama"],
    synopsis: "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core."
},
{
    id: 4,
    title: "Trainspotting",
    theme: ["Drama"],
    synopsis: "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends."
},
{
    id: 5,
    title: "A Beautiful Mind",
    theme: ["Biography", "Drama"],
    synopsis: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish."
},
  {
    id: 6,
    title: "Beauty and the Beast",
    theme: ["Animation"],
    synopsis: "A young woman falls in love with a prince who is transformed into a beast.",
    director: "Gary Trousdale, Kirk Wise"
  },
  {
    id: 7,
    title: "Shrek",
    theme: ["Animation"],
    synopsis: "An ogre falls in love with a princess while on a quest to save her.",
    director: "Andrew Adamson, Vicky Jenson"
  },
  {
    id: 8,
    title: "Cinderella",
    theme: ["Animation"],
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
  },
  {
    id: 32,
    title: "The Godfather",
    theme: ["Crime", "Drama"],
    synopsis: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son."
},
{
    id: 33,
    title: "Fight Club",
    theme: ["Drama"],
    synopsis: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
},
{
    id: 34,
    title: "Edward Scissorhands",
    theme: ["Drama", "Fantasy", "Romance"],
    synopsis: "An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world."
},
{
    id: 35,
    title: "Parasite",
    theme: ["Drama", "Thriller"],
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
},
{
    id: 36,
    title: "The Sixth Sense",
    theme: ["Drama", "Mystery", "Thriller"],
    synopsis: "A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist."
},
{
    id: 37,
    title: "Titanic",
    theme: ["Drama", "Romance"],
    synopsis: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
},
{
    id: 38,
    title: "Seven",
    theme: ["Crime", "Drama", "Mystery"],
    synopsis: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
},
{
    id: 39,
    title: "American Beauty",
    theme: ["Drama"],
    synopsis: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend."
},
{
    id: 40,
    title: "Leon",
    theme: ["Action", "Crime", "Drama"],
    synopsis: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade."
},
{
    id: 41,
    title: "Schindler's List",
    theme: ["Biography", "Drama", "History"],
    synopsis: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
},
{
    id: 42,
    title: "A Quiet Place",
    theme: ["Drama", "Horror", "Sci-Fi"],
    synopsis: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing."
},
{
    id: 43,
    title: "Taxi Driver",
    theme: ["Crime", "Drama"],
    synopsis: "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action."
},
{
    id: 44,
    title: "The Shape of Water",
    theme: ["Drama", "Fantasy", "Romance"],
    synopsis: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity."
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
