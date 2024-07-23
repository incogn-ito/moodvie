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
      {text: 'indecisive', navigateToIdx: 2}
    ]
  },
  {
    id: 2, // up for anything
    question: "You're going on an adventure. Which character would you choose?",
    options: [
      {text: 'Butch Cassidy', navigateToIdx: 1},
      {text: 'Jobu Tupaki', navigateToIdx: 6},
      {text: 'Aragorn', navigateToIdx: 6},
      {text: 'Trinity', navigateToIdx: 8}
    ]
  },
  {
    id: 3, // not in the mood
    question: 'How about television? Which TV character do you love to hate most?',
    options: [
      {text: 'Prince Joffrey', navigateToIdx: 11},
      {text: 'Nurse Ratched', navigateToIdx: 12},
      {text: 'Gus Fring', navigateToIdx: 11},
      {text: 'Villanelle', navigateToIdx: 12}    
    ]
  },
  {
    id: 4, // i hate movies
    question: 'You lose. But try some of these.',
    options: [
      {text: 'good books'},  // somehow link all buttons in this ID to websites. Goodreads.com, 
      {text: 'great tv'},
      {text: 'fun comics'},
      {text: 'cool video games'} 
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
    id: 8, //luke skywalker + trinity
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

/*
synopsis credit: imdb.com and AFI.com

categories:
nostalgic/sad:
Romance, Western, Fantasy, Animation

Frustrated:
Crime, Action, Sci-fi, Horror, Drama

Up for anything: (all categories x animation)
History, Biography, Horror, Action, Sci-fi, Crime, Drama

*/
const itoLeonMovies = [
  
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
    title: "The Babadook",
    theme: ["Horror", "Drama"],
    synopsis: "",
    director: "Jennifer"
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
    title: "Everything Everywhere All at Once",
    theme: ["Action"],
    synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    director: "Daniel Kwan, Daniel Scheinert"
  },
  {
    id: 9,
    title: "Finding Nemo",
    theme: ["Animation"],
    synopsis: "A father clownfish searches for his missing son.",
    director: "Andrew Stanton"
  },
  {
    id: 10,
    title: "City Lights",
    theme: ["Romance"],
    synopsis: "A tramp falls in love with a blind girl and tries to earn money for her eye surgery.",
    director: "Charles Chaplin"
  },
  {
    id: 11,
    title: "Annie Hall",
    theme: ["Romance"],
    synopsis: "A neurotic New York comedian falls in love with a quirky woman.",
    director: "Woody Allen"
  },
  {
    id: 12,
    title: "It Happened One Night",
    theme: ["Romance"],
    synopsis: "A spoiled heiress falls in love with a roguish reporter during a cross-country trip.",
    director: "Frank Capra"
  },
  {
    id: 13,
    title: "Roman Holiday",
    theme: ["Romance"],
    synopsis: "A princess falls in love with a reporter during a visit to Rome.",
    director: "William Wyler"
  },
  {
    id: 14,
    title: "The Philadelphia Story",
    theme: ["Romance"],
    synopsis: "A socialite's wedding plans are complicated by the arrival of her ex-husband and a reporter.",
    director: "George Cukor"
  },
  {
    id: 15,
    title: "When Harry Met Sally...",
    theme: ["Romance"],
    synopsis: "Two friends question whether men and women can ever just be friends.",
    director: "Rob Reiner"
  },
  {
    id: 16,
    title: "Adam's Rib",
    theme: ["Romance"],
    synopsis: "A husband and wife lawyer couple find themselves on opposite sides of a court case.",
    director: "George Cukor"
  },
  {
    id: 17,
    title: "Moonstruck",
    theme: ["Romance"],
    synopsis: "A widowed Brooklyn bookkeeper falls in love with her fiancé's estranged brother.",
    director: "Norman Jewison"
  },
  {
    id: 18,
    title: "Harold and Maude",
    theme: ["Romance"],
    synopsis: "A young man obsessed with death falls in love with a lively septuagenarian.",
    director: "Hal Ashby"
  },
  {
    id: 19,
    title: "Sleepless in Seattle",
    theme: ["Romance"],
    synopsis: "A recently widowed man's son calls a radio talk show in an attempt to find his father a partner.",
    director: "Nora Ephron"
  },

  // Western
  {
    id: 20,
    title: "The Searchers",
    theme: ["Western"],
    synopsis: "A Civil War veteran embarks on a quest to rescue his niece from Comanches.",
    director: "John Ford"
  },
  {
    id: 21,
    title: "High Noon",
    theme: ["Western"],
    synopsis: "A town marshal must face a gang of killers alone.",
    director: "Fred Zinnemann"
  },
  {
    id: 22,
    title: "Shane",
    theme: ["Western"],
    synopsis: "A mysterious drifter helps a homestead family against a cattle baron.",
    director: "George Stevens"
  },
  {
    id: 23,
    title: "Unforgiven",
    theme: ["Western"],
    synopsis: "A retired gunslinger takes on one last job to help a struggling widow.",
    director: "Clint Eastwood"
  },
  {
    id: 24,
    title: "Red River",
    theme: ["Western"],
    synopsis: "A cattle drive turns into a confrontation between a father and his adopted son.",
    director: "Howard Hawks"
  },
  {
    id: 25,
    title: "The Wild Bunch",
    theme: ["Western"],
    synopsis: "An aging outlaw gang tries to make one last big score.",
    director: "Sam Peckinpah"
  },
  {
    id: 26,
    title: "Butch Cassidy and the Sundance Kid",
    theme: ["Western"],
    synopsis: "Two outlaws escape to Bolivia after a series of train robberies.",
    director: "George Roy Hill"
  },
  {
    id: 27,
    title: "McCabe & Mrs. Miller",
    theme: ["Western"],
    synopsis: "A gambler and a prostitute form a business partnership in a remote mining town.",
    director: "Robert Altman"
  },
  {
    id: 28,
    title: "Stagecoach",
    theme: ["Western"],
    synopsis: "A group of travelers journey through dangerous territory in a stagecoach.",
    director: "John Ford"
  },
  {
    id: 29,
    title: "Cat Ballou",
    theme: ["Western"],
    synopsis: "A schoolteacher turns outlaw to avenge her father's murder.",
    director: "Elliot Silverstein"
  },

  // Sports
  {
    id: 30,
    title: "Raging Bull",
    theme: ["Sports", "Drama"],
    synopsis: "The life of boxer Jake LaMotta, whose violence and temper led him to the top in the ring and destroyed his life outside it.",
    director: "Martin Scorsese"
  },
  {
    id: 31,
    title: "Rocky",
    theme: ["Sports", "Drama"],
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
    theme: ["Biography", "Drama", "History", "Horror"],
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
  },
  {
    id: 44,
    title: "The Shape of Water",
    theme: ["Drama", "Fantasy", "Romance"],
    synopsis: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity."
  },
  {
    id: 44,
    title: "The Shape of Water",
    theme: ["Drama", "Fantasy", "Romance"],
    synopsis: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity."
  },
  // ito and leon list of movies
  {
    id: 45,
    title: 'Lord of the Rings',
    theme: ['Fantasy'],
    synopsis: 'A mighty wizard leads a reluctant band of men, hobbits, a dwarf, and an elf on a terrifying quest to destroy the One Ring before an ancient evil god becomes manifest and destroys all Middle-Earth.',
    director: 'Peter Jackson',
    
  },
  {
    id: 46,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    theme: ['Fantasy'],
    synopsis: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
    director: 'Chris Columbus',
    
  },
  {
    id: 47,
    title: 'Die Hard',
    theme: ['Action'],
    synopsis: 'A New York City cop travels to Los Angeles to reconcile with his wife but learns she\'s been taken hostage by terrorist in a skyscraper.',  
    director: 'John McTiernan',
  },
  {
  id: 48,
  title: 'Anne of Green Gables',
  theme: ['Drama', 'Romance'],
  synopsis: 'An orphan girl, sent to an elderly brother and sister by mistake, charms her new home and community with her fiery spirit and imagination.',
  director: 'Kevin Sullivan',
  },
  {
    id: 49,
    title: 'Past Lives',
    theme: ['Drama', 'Romance'],
    synopsis: 'Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora\'s family emigrates from South Korea. Two decades later, they are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life, in this heartrending modern romance.',
    director: 'Celine Song',
  },
  {
    id: 50,
    title: 'Shawshank Redemption',
    theme: ['Drama', 'Crime'],
    synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    director: 'Frank Darabont',
  },
  {
    id: 51,
    title: 'Bourne Identity',
    theme: ['Action'],
    synopsis: 'A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.',
    director: 'Doug Liman',
  },
  {
    id: 52,
    title: 'Dark Knight',
    theme: ['Action'],
    synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan'
  },
  {
    id: 53,
    title: 'Attack the Block',
    theme: ['Action'],
    synopsis: 'A teen gang in South London defend their block from an alien invasion.',
    director: 'Joe Cornish'
  },
  {
    id: 54,
    title: 'Spiderman: Into the Spiderverse',
    theme: ['Animation'],
    synopsis: 'Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
    director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman'
  },
  {
    id: 55,
    title: 'The Great Escape',
    theme: ['Drama', 'History'],
    synopsis: 'Allied prisoners of war plan for several hundred of their men to escape from a German camp during World War II.',
    director: 'John Sturges'
  },
  {
    id: 56,
    title: 'The Thing',
    theme: ['Sci-Fi', 'Horror'],
    synopsis: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
    director: 'John Carpenter'
  },
  {
    id: 57,
    title: 'Alien',
    theme: ['Sci-Fi', 'Horror'],
    synopsis: 'The crew of a commercial spacecraft encounters a deadly lifeform after investigating a mysterious transmission of unknown origin.',
    director: 'Ridley Scott'
  },
  {
    id: 58,
    title: 'Life Is Beautiful',
    theme: ['Drama', 'History'],
    synopsis: 'When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.',
    director: 'Robert Benigni'
  },
  {
    id: 59,
    title: 'The Iron Giant',
    theme: ['Drama', 'Animation'],
    synopsis: 'A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.',
    director: 'Brad Bird'
  },
  {
    id: 59,
    title: 'The Iron Giant',
    theme: ['Drama', 'Animation'],
    synopsis: 'A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.',
    director: 'Brad Bird'
  },
  {
    id: 60,
    title: 'Godzilla Minus One',
    theme: ['Action', 'Drama'],
    synopsis: 'Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.',
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
