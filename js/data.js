
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
      question: 'Which mood comes closest to how you currently feel?',
      options: [
        {text: 'nostalgic', navigateToIdx: 5},
        {text: 'bored', navigateToIdx: 8},
        {text: 'frustrated', navigateToIdx: 6},
        {text: 'content', navigateToIdx: 2}
      ]
    },
    {
      id: 2, 
      question: "Which mood comes closest to how you currently feel?",
      options: [
        {text: 'excited', navigateToIdx: 5},
        {text: 'nervous', navigateToIdx: 8},
        {text: 'optimistic', navigateToIdx: 5},
        {text: 'stressed', navigateToIdx: 8}
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
        {text: 'Luke Skywalker', navigateToIdx: 7},
        {text: 'Harley Quinn', navigateToIdx: 8}, 
        {text: 'Forest Gump', navigateToIdx: 9},
        {text: 'Elle Woods', navigateToIdx: 10}
      ]
    },
    {
      id: 6, // frustrated
      question: 'You\'re going on a journey, which villain will you choose as your arch enemy?',
      options: [
        {text: 'Thanos', navigateToIdx: 7},
        {text: 'Regina George', navigateToIdx: 2},
        {text: 'Hannibal Lecter', navigateToIdx: 3},
        {text: 'Hans Landa', navigateToIdx: 7}
      ]
    },
    {
      id: 7, // luke sky, forest gump
      question: "What tool will you choose to bring with you?",
      options: [
        {text: 'Baseball bat', navigateToIdx: 10},
        {text: 'Samurai sword', navigateToIdx: 11},
        {text: "Running shoes", navigateToIdx: 10},
        {text: 'Light saber', navigateToIdx: 11}
      ]
    },
    {
      id: 8, //  
      question: "You're going on an adventure. Which character would you choose?",
      options: [
        {text: 'Butch Cassidy', navigateToIdx: 8},
        {text: 'Jobu Tupaki', navigateToIdx: 6},
        {text: 'Aragorn', navigateToIdx: 6},
        {text: 'Trinity', navigateToIdx: 8}
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
  
  const moviesWithArtwork = [
    {
      id: 0,
      title: "Braveheart",
      theme: ["Biography", "Drama", "History"],
      synopsis: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
      artwork: "https://www.themoviedb.org/t/p/w500/9nI0XbBo7F5QsZBzmCdd6FO8BzY.jpg"
    },
    {
      id: 1,
      title: "The Help",
      theme: ["Drama"],
      synopsis: "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work, and the hardships they go through on a daily basis.",
      artwork: "https://www.themoviedb.org/t/p/w500/vzH8QZ5Mz59vMZy9GltYo0lV3td.jpg"
    },
    {
      id: 2,
      title: "The Game",
      theme: ["Drama", "Mystery", "Thriller"],
      synopsis: "After a wealthy San Francisco banker is given an opportunity to participate in a mysterious game, his life is turned upside down as he begins to question if it might really be a concealed conspiracy to destroy him.",
      artwork: "https://www.themoviedb.org/t/p/w500/pd7xSEeuON8J6y2rHiIn7xT7Dpe.jpg"
    },
    {
      id: 3,
      title: "Spotlight",
      theme: ["Biography", "Crime", "Drama"],
      synopsis: "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
      artwork: "https://www.themoviedb.org/t/p/w500/nibYxgQIbQlUBbuSHmO4wNpm8ow.jpg"
    },
    {
      id: 4,
      title: "Trainspotting",
      theme: ["Drama"],
      synopsis: "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
      artwork: "https://www.themoviedb.org/t/p/w500/7bZybI3b6ryT6xxVIZPpL1cfIlX.jpg"
    },
    {
      id: 5,
      title: "A Beautiful Mind",
      theme: ["Biography", "Drama"],
      synopsis: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
      artwork: "https://www.themoviedb.org/t/p/w500/i0DqkX4cbbk5HqR8lsYOo7RMmDA.jpg"
    },
    {
      id: 6,
      title: "The Babadook",
      theme: ["Horror", "Drama"],
      synopsis: "A single mother and her child fall into a deep well of paranoia when an eerie children's book titled 'Mister Babadook' manifests in their home.",
      artwork: "https://www.themoviedb.org/t/p/w500/1c6rsXJMy9OX55NpSOwR8tEr7uK.jpg"
    },
    {
      id: 7,
      title: "Shrek",
      theme: ["Animation"],
      synopsis: "An ogre falls in love with a princess while on a quest to save her.",
      artwork: "https://www.themoviedb.org/t/p/w500/kx7NmbQmnzErqmfWefOTkThXwyo.jpg"
    },
    {
      id: 8,
      title: "Everything Everywhere All at Once",
      theme: ["Action"],
      synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
      artwork: "https://www.themoviedb.org/t/p/w500/2pEzR1OAd1Ibn2X0jz9t1sTIDtd.jpg"
    },
    {
      id: 9,
      title: "Finding Nemo",
      theme: ["Animation"],
      synopsis: "A father clownfish searches for his missing son.",
      artwork: "https://www.themoviedb.org/t/p/w500/jK6kr9JHrb2GzVE2qU4q6VY4RVc.jpg"
    },
    {
      id: 10,
      title: "City Lights",
      theme: ["Romance"],
      synopsis: "A tramp falls in love with a blind girl and tries to earn money for her eye surgery.",
      artwork: "https://www.themoviedb.org/t/p/w500/4Qe6NLM1KwR5C8v6uhyoZnFv6Lw.jpg"
    },
    {
      id: 11,
      title: "Annie Hall",
      theme: ["Romance"],
      synopsis: "A neurotic New York comedian falls in love with a quirky woman.",
      artwork: "https://www.themoviedb.org/t/p/w500/l1uHoPCg0mN8yOeKjEYkXgIQZo8.jpg"
    },
    {
      id: 12,
      title: "It Happened One Night",
      theme: ["Romance"],
      synopsis: "A spoiled heiress falls in love with a roguish reporter during a cross-country trip.",
      artwork: "https://www.themoviedb.org/t/p/w500/whuIZ1dBLSHDXJlTA0DLzTrqOe5.jpg"
    },
    {
      id: 13,
      title: "Roman Holiday",
      theme: ["Romance"],
      synopsis: "A princess falls in love with a reporter during a visit to Rome.",
      artwork: "https://www.themoviedb.org/t/p/w500/8xtq4nJRD63NzGqDiw55Ovsiz1W.jpg"
    },
    {
      id: 14,
      title: "The Philadelphia Story",
      theme: ["Romance"],
      synopsis: "A socialite's wedding plans are complicated by the arrival of her ex-husband and a reporter.",
      artwork: "https://www.themoviedb.org/t/p/w500/8T43E9fwOevkyoFDWyjHK2AGz4A.jpg"
    },
    {
      id: 15,
      title: "When Harry Met Sally...",
      theme: ["Romance"],
      synopsis: "Two friends question whether men and women can ever just be friends.",
      artwork: "https://www.themoviedb.org/t/p/w500/8wxEpmK6NGVfhXvSITt3O4YXFYR.jpg"
    },
    {
      id: 16,
      title: "Adam's Rib",
      theme: ["Romance"],
      synopsis: "A husband and wife lawyer couple find themselves on opposite sides of a court case.",
      artwork: "https://www.themoviedb.org/t/p/w500/sHtwjCPN7kK9zdSZG71nXApRKm2.jpg"
    },
    {
      id: 17,
      title: "Moonstruck",
      theme: ["Romance"],
      synopsis: "A widowed Brooklyn bookkeeper falls in love with her fiancé's estranged brother.",
      artwork: "https://www.themoviedb.org/t/p/w500/q1K2v5BD5xJyyXhKhbyjjTqF5H2.jpg"
    },
    {
      id: 18,
      title: "Harold and Maude",
      theme: ["Romance"],
      synopsis: "A young man obsessed with death falls in love with a lively septuagenarian.",
      artwork: "https://www.themoviedb.org/t/p/w500/nzRDOcOcy02eYfo8ArxTYdt0WEz.jpg"
    },
    {
      id: 19,
      title: "Sleepless in Seattle",
      theme: ["Romance"],
      synopsis: "A recently widowed man's son calls a radio talk show in an attempt to find his father a partner.",
      artwork: "https://www.themoviedb.org/t/p/w500/5qBQw1dM5L9WzS6p3Fq3NZmApMf.jpg"
    },
    {
      id: 20,
      title: "The Searchers",
      theme: ["Western"],
      synopsis: "A Civil War veteran embarks on a quest to rescue his niece from Comanches.",
      artwork: "https://www.themoviedb.org/t/p/w500/6Ftae1H1ZGOpUMuUOAP9BhfKNJx.jpg"
    },
    {
      id: 21,
      title: "High Noon",
      theme: ["Western"],
      synopsis: "A town marshal must face a gang of killers alone.",
      artwork: "https://www.themoviedb.org/t/p/w500/h7or7HlkJQp19HgGzXqz9Jcy7kc.jpg"
    },
    {
      id: 22,
      title: "Shane",
      theme: ["Western"],
      synopsis: "A mysterious drifter helps a homestead family against a cattle baron.",
      artwork: "https://www.themoviedb.org/t/p/w500/2cEqd9XkPq5BHoVO7bKxCPTkYvQ.jpg"
    },
    {
      id: 23,
      title: "Unforgiven",
      theme: ["Western"],
      synopsis: "A retired gunslinger takes on one last job to help a struggling widow.",
      artwork: "https://www.themoviedb.org/t/p/w500/xUe5HtLl1L5mZLOIqWX4RekDMtx.jpg"
    },
    {
      id: 24,
      title: "Red River",
      theme: ["Western"],
      synopsis: "A cattle drive turns into a confrontation between a father and his adopted son.",
      artwork: "https://www.themoviedb.org/t/p/w500/9QOujdU4qLP5rTIZM6agKlLXIi0.jpg"
    },
    {
      id: 25,
      title: "The Wild Bunch",
      theme: ["Western"],
      synopsis: "An aging outlaw gang tries to make one last big score.",
      artwork: "https://www.themoviedb.org/t/p/w500/kskpkjKfiCs56TOwX9r0rKmH09A.jpg"
    },
    {
      id: 26,
      title: "Butch Cassidy and the Sundance Kid",
      theme: ["Western"],
      synopsis: "Two outlaws escape to Bolivia after a series of train robberies.",
      artwork: "https://www.themoviedb.org/t/p/w500/87f7fFnn8Fjc9Q67seKhqHn4zdv.jpg"
    },
    {
      id: 27,
      title: "McCabe & Mrs. Miller",
      theme: ["Western"],
      synopsis: "A gambler and a prostitute form a business partnership in a remote mining town.",
      artwork: "https://www.themoviedb.org/t/p/w500/9sn8XJ5AaI2ZjbuOtSa2R1jUVF0.jpg"
    },
    {
      id: 28,
      title: "Stagecoach",
      theme: ["Western"],
      synopsis: "A group of travelers journey through dangerous territory in a stagecoach.",
      artwork: "https://www.themoviedb.org/t/p/w500/2i8GbMtUeZkA7v8QH9gZyGPg9gS.jpg"
    },
    {
      id: 29,
      title: "Cat Ballou",
      theme: ["Western"],
      synopsis: "A schoolteacher turns outlaw to avenge her father's murder.",
      artwork: "https://www.themoviedb.org/t/p/w500/2YF3xh9lWGOGAPF46IQODF7lo6s.jpg"
    },
    {
      id: 30,
      title: "Raging Bull",
      theme: ["Sports", "Drama"],
      synopsis: "The life of boxer Jake LaMotta, whose violence and temper led him to the top in the ring and destroyed his life outside it.",
      artwork: "https://www.themoviedb.org/t/p/w500/3pPqc1z1mYLcEzRUxFSu8McqMeA.jpg"
    },
    {
      id: 31,
      title: "Rocky",
      theme: ["Sports", "Drama"],
      synopsis: "A small-time boxer gets a chance to fight a heavyweight champion in a bout.",
      artwork: "https://www.themoviedb.org/t/p/w500/vgVE0K5kDUNyCqYQ6f8M1t0zjpO.jpg"
    },
    {
      id: 32,
      title: "The Godfather",
      theme: ["Crime", "Drama"],
      synopsis: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      artwork: "https://www.themoviedb.org/t/p/w500/5qQ60kDFCE1RwjT1Q4RocVJQ6Gn.jpg"
    },
    {
      id: 33,
      title: "Fight Club",
      theme: ["Drama"],
      synopsis: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      artwork: "https://www.themoviedb.org/t/p/w500/v8GeM0Z51ctWBX43Hr9f3QH62LO.jpg"
    },
    {
      id: 34,
      title: "Edward Scissorhands",
      theme: ["Drama", "Fantasy", "Romance"],
      synopsis: "An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world.",
      artwork: "https://www.themoviedb.org/t/p/w500/y4Jj0XsM6OwG7x6ys4hC0T21Fg2.jpg"
    },
    {
      id: 35,
      title: "Parasite",
      theme: ["Drama", "Thriller"],
      synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      artwork: "https://www.themoviedb.org/t/p/w500/9TnAE0FgtihItfs4U1nE6Ixlw1S.jpg"
    },
    {
      id: 36,
      title: "The Sixth Sense",
      theme: ["Drama", "Mystery", "Thriller"],
      synopsis: "A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.",
      artwork: "https://www.themoviedb.org/t/p/w500/43D9rMypPjOofT0C7dN2dZ4R7TE.jpg"
    },
    {
      id: 37,
      title: "Titanic",
      theme: ["Drama", "Romance"],
      synopsis: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      artwork: "https://www.themoviedb.org/t/p/w500/qos3EBp1IQkITbS0XKw3Ne3UK0L.jpg"
    },
    {
      id: 38,
      title: "Seven",
      theme: ["Crime", "Drama", "Mystery"],
      synopsis: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      artwork: "https://www.themoviedb.org/t/p/w500/xHjJovD1Z8Uw1nUfq6yCRBQmZ0S.jpg"
    },
    {
      id: 39,
      title: "American Beauty",
      theme: ["Drama"],
      synopsis: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      artwork: "https://www.themoviedb.org/t/p/w500/6r7zK4kOg9epqLtaFCnJFsM53F8.jpg"
    },
    {
      id: 40,
      title: "Leon",
      theme: ["Action", "Crime", "Drama"],
      synopsis: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
      artwork: "https://www.themoviedb.org/t/p/w500/hvT4geYq9Er3c2V1Rzz8T2bPGbR.jpg"
    },
    {
      id: 41,
      title: "Schindler's List",
      theme: ["Biography", "Drama", "History", "Horror"],
      synopsis: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      artwork: "https://www.themoviedb.org/t/p/w500/8g4hRIgsRPLDvqBDFE5LVxkrXNW.jpg"
    },
    {
      id: 42,
      title: "A Quiet Place",
      theme: ["Drama", "Horror", "Sci-Fi"],
      synopsis: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
      artwork: "https://www.themoviedb.org/t/p/w500/98msDd0XN3FhFdZ9YXcwzxJgfLP.jpg"
    },
    {
      id: 43,
      title: "Taxi Driver",
      theme: ["Crime", "Drama"],
      synopsis: "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
      artwork: "https://www.themoviedb.org/t/p/w500/sZSO9O8X9dBOd3ysysDF7VdEIlS.jpg"
    },
    {
      id: 44
  
  ,
      title: "The Shape of Water",
      theme: ["Drama", "Fantasy", "Romance"],
      synopsis: 'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.',
      artwork: "https://www.themoviedb.org/t/p/w500/4iHTZioo2PzF1cYo2QSHrkKppN.jpg"
    },
    {
      id: 45,
      title: "Lord of the Rings",
      theme: ["Fantasy"],
      synopsis: "A mighty wizard leads a reluctant band of men, hobbits, a dwarf, and an elf on a terrifying quest to destroy the One Ring before an ancient evil god becomes manifest and destroys all Middle-Earth.",
      artwork: "https://www.themoviedb.org/t/p/w500/kYcYey90bRYM69vnUZpx9TqV22G.jpg"
    },
    {
      id: 46,
      title: "Harry Potter and the Sorcerer's Stone",
      theme: ["Fantasy"],
      synopsis: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      artwork: "https://www.themoviedb.org/t/p/w500/u3bDdxTuQ8dGzxaFZT2dG2t0JMe.jpg"
    },
    {
      id: 47,
      title: "Die Hard",
      theme: ["Action"],
      synopsis: "A New York City cop travels to Los Angeles to reconcile with his wife but learns she's been taken hostage by terrorist in a skyscraper.",
      artwork: "https://www.themoviedb.org/t/p/w500/k8oQnmWm6dkdR4cdP1Rk6v56nZP.jpg"
    },
    {
      id: 48,
      title: "Anne of Green Gables",
      theme: ["Drama", "Romance"],
      synopsis: "An orphan girl, sent to an elderly brother and sister by mistake, charms her new home and community with her fiery spirit and imagination.",
      artwork: "https://www.themoviedb.org/t/p/w500/6I76hSMWvPZRPzOUAqAwC2ZHi1E.jpg"
    },
    {
      id: 49,
      title: "Past Lives",
      theme: ["Drama", "Romance"],
      synopsis: "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora's family emigrates from South Korea. Two decades later, they are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life, in this heartrending modern romance.",
      artwork: "https://www.themoviedb.org/t/p/w500/5lh66ED7dKPPIS7mfCy9V9IcYFB.jpg"
    },
    {
      id: 50,
      title: "Shawshank Redemption",
      theme: ["Drama", "Crime"],
      synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      artwork: "https://www.themoviedb.org/t/p/w500/xC3Ri9MSkY0EwrNwZqDQNBowU9W.jpg"
    },
    {
      id: 51,
      title: "Bourne Identity",
      theme: ["Action"],
      synopsis: "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.",
      artwork: "https://www.themoviedb.org/t/p/w500/rCzsnFfLgA0XKXTebgEjK0MfJWe.jpg"
    },
    {
      id: 52,
      title: "Dark Knight",
      theme: ["Action"],
      synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      artwork: "https://www.themoviedb.org/t/p/w500/4zN0m9V4YgeB42T6F5JlCzVzXJv.jpg"
    },
    {
      id: 53,
      title: "Attack the Block",
      theme: ["Action"],
      synopsis: "A teen gang in South London defend their block from an alien invasion.",
      artwork: "https://www.themoviedb.org/t/p/w500/q3CqfOAfkZyEUMp8P7YXxHkhksO.jpg"
    },
    {
      id: 54,
      title: "Spiderman: Into the Spiderverse",
      theme: ["Animation"],
      synopsis: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      artwork: "https://www.themoviedb.org/t/p/w500/7i4vMBpHluTkFNSXyaFPZzR0Wyt.jpg"
    },
    {
      id: 55,
      title: "The Great Escape",
      theme: ["Drama", "History"],
      synopsis: "Allied prisoners of war plan for several hundred of their men to escape from a German camp during World War II.",
      artwork: "https://www.themoviedb.org/t/p/w500/kb0q8LR6MXNOxgfA7pTH6ZP9rK5.jpg"
    },
    {
      id: 56,
      title: "The Thing",
      theme: ["Sci-Fi", "Horror"],
      synopsis: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
      artwork: "https://www.themoviedb.org/t/p/w500/8kZEvNxBoXPxS1dPG5l9msFc5Sx.jpg"
    },
    {
      id: 57,
      title: "Alien",
      theme: ["Sci-Fi", "Horror"],
      synopsis: "The crew of a commercial spacecraft encounters a deadly lifeform after investigating a mysterious transmission of unknown origin.",
      artwork: "https://www.themoviedb.org/t/p/w500/4T8ugFf1J1OTs1d7BghKvA9Eb9R.jpg"
    },
    {
      id: 58,
      title: "Life Is Beautiful",
      theme: ["Drama", "History"],
      synopsis: "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
      artwork: "https://www.themoviedb.org/t/p/w500/1KnP8OhSK29Yd8EM7LwPzA1XDWn.jpg"
    },
    {
      id: 59,
      title: "The Iron Giant",
      theme: ["Drama", "Animation"],
      synopsis: "A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.",
      artwork: "https://www.themoviedb.org/t/p/w500/hEBqJkT86B8T7fxGcftE4M9c5F5.jpg"
    },
    {
      id: 60,
      title: "Godzilla Minus One",
      theme: ["Action", "Drama"],
      synopsis: "Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
      artwork: "https://www.themoviedb.org/t/p/w500/7JcM8yyowL2z6qftQKq9mjSH3HH.jpg"
    }
  ]
  
  export {prompts, moviesWithArtwork}