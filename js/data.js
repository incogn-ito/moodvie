
const prompts = [
    {
      id: 0, // mood-1 (happy)
      question: 'You\'re going on an adventure, which character will you choose to be?',
      options: [
        {text: 'Luke Skywalker', navigateToIdx: 4},
        {text: 'Harley Quinn', navigateToIdx: 5}, 
        {text: 'Forest Gump', navigateToIdx: 4},
        {text: 'Elle Woods', navigateToIdx: 5}
      ],
      questionImg: 'assets/img/img0.png'
    },
    {
      id: 1, // mood-2 (sad)
      question: 'You\'re going on an adventure, which character will you choose to be?',
      options: [
        {text: 'Rocky Balboa', navigateToIdx: 6},
        {text: 'The Hulk', navigateToIdx: 7},
        {text: 'Dumbledore', navigateToIdx: 6},
        {text: 'Morpheus', navigateToIdx: 7}
      ],
      questionImg: 'assets/img/img1.png'
    },
    {
      id: 2, // mood-3 (frustrated)
      question: 'You\'re going on an adventure, which character will you choose to be?',
      options: [
        {text: 'John Wick', navigateToIdx: 8},
        {text: 'Darth Vader', navigateToIdx: 9},
        {text: 'Beatrix Kiddo', navigateToIdx: 8},
        {text: 'Michael Corleone', navigateToIdx: 9}
      ],
      questionImg: 'assets/img/img2.png'
    },
    {
      id: 3, // mood-4 (playful)
      question: 'You\'re going on an adventure, which character will you choose to be?',
      options: [
        {text: 'Shrek', navigateToIdx: 11},
        {text: 'Braveheart', navigateToIdx: 10},
        {text: 'Juno', navigateToIdx: 11},
        {text: 'The Joker', navigateToIdx: 10}    
      ],
      questionImg: 'assets/img/img3.png'
    },
    {
      id: 4, // forest + luke skywalker
      question: 'What weapon or tool do you take with you on your journey?',
      options: [
        {text: 'Samurai sword', navigateToIdx: 12},   
        {text: 'Running shoes', navigateToIdx: 13},
        {text: 'Baseball bat', navigateToIdx: 12},
        {text: 'Light saber', navigateToIdx: 13} 
      ],
      questionImg: 'assets/img/img4.png'
    },
    {
      id: 5, // harle + elle
      question: 'What weapon or tool do you take with you on your journey?',
      options: [
        {text: 'Acetone', navigateToIdx: 14},
        {text: 'Shoulder cannon', navigateToIdx: 15}, 
        {text: 'Fireworks', navigateToIdx: 14},
        {text: 'Encyclopedia', navigateToIdx: 15}
      ],
      questionImg: 'assets/img/img5.png'
    },
    {
      id: 6, // rocky + dumbledore 
      question: 'What weapon or tool do you take with you on your journey?',
      options: [
        {text: 'Crowbar', navigateToIdx: 16},
        {text: 'Nunchucks', navigateToIdx: 17},
        {text: 'Chef\'s knife', navigateToIdx: 17},
        {text: 'Philosopher\'s Stone', navigateToIdx: 16}
      ],
       questionImg: 'assets/img/img7.png'
    },
    {
      id: 7, // hulk + morpheus
      question: 'What weapon or tool do you take with you on your journey?',
      options: [
        {text: 'Lasso', navigateToIdx: 18},
        {text: 'Thor\'s Hammer', navigateToIdx: 18},
        {text: "Spear", navigateToIdx: 19},
        {text: 'Computer', navigateToIdx: 19}
      ],
      questionImg: 'assets/img/img13.png'
    },
    {
      id: 8, //  wick + bride/beatrix kill bill
      question: 'What weapon or tool do you take with you on your journey?',
      options: [
        {text: 'Frying pan', navigateToIdx: 20},
        {text: 'Dynamite', navigateToIdx: 21},
        {text: 'Broadsword', navigateToIdx: 21},
        {text: 'Exploding heart technique', navigateToIdx: 20}
      ],
      questionImg: 'assets/img/img12.png'
    },
    {
      id: 9, // coreleone, darth vadar
      question: 'What weapon or tool do you take with you on your journey?',
      options: [
        {text: 'Whisky', navigateToIdx: 22},
        {text: 'Velociraptor', navigateToIdx: 23},
        {text: 'The Force', navigateToIdx: 22},
        {text: 'Rat poison', navigateToIdx: 23}
      ],
      questionImg: 'assets/img/img6.png'
    },
    {
      id: 10, // braveheart + joker
      question: 'What weapon or tool do you take with you on your journey?',
      options: [
        {text: 'Light saber', navigateToIdx: 24},
        {text: 'Grenade', navigateToIdx: 25},
        {text: 'Broadsword', navigateToIdx: 25},
        {text: 'Sharpened pencil', navigateToIdx: 24}
      ],
      questionImg: 'assets/img/img11.png'
    },
    {
      id: 11, // shrek + juno
      question: 'What weapon or tool do you take with you on your journey?',
      options: [
        {text: 'Fart bomb', navigateToIdx: 26},
        {text: 'Hamburger phone', navigateToIdx: 26},
        {text: 'Spiked club', navigateToIdx: 27},
        {text: 'Nerf gun', navigateToIdx: 27}
      ],
      questionImg: 'assets/img/img8.png'
    },
    {
      id: 12, // samurai sword + baseball bat - forest + luke
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Futuristic city', navigateToIdx: 28},   
        {text: 'Jurassic era', navigateToIdx: 29},
        {text: 'Exoplanet colony', navigateToIdx: 28},
        {text: 'Underwater kingdom', navigateToIdx: 30} 
      ],
      questionImg: 'assets/img/img26.png'
    },
    {
      id: 13, // Running shoes + light saber - ""
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Desert wasteland', navigateToIdx: 31},   
        {text: 'Abandoned city', navigateToIdx: 31},
        {text: 'Jungle', navigateToIdx: 32},
        {text: 'Wild West', navigateToIdx: 33} 
      ],
      questionImg: 'assets/img/img25.png'
    },
    {
      id: 14, // acetone + fireworks harle+elle 
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Futuristic city', navigateToIdx: 34},    
        {text: 'Jurassic era', navigateToIdx: 35}, 
        {text: 'Exoplanet colony', navigateToIdx: 34},
        {text: 'Underwater kingdom', navigateToIdx: 36} 
      ],
      questionImg: 'assets/img/img26.png'
    },
    {
      id: 15, // shoulder cannon + encyc "" 
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Desert wasteland', navigateToIdx: 37},   
        {text: 'Abandoned city', navigateToIdx: 37},
        {text: 'Jungle', navigateToIdx: 38},
        {text: 'Wild West', navigateToIdx: 39} 
      ],
      questionImg: 'assets/img/img25.png'
    },
    {
      id: 16, // crowbar + philosopher's stone rocky, dumbledore 
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Futuristic city', navigateToIdx: 40},    
        {text: 'Jurassic era', navigateToIdx: 41}, 
        {text: 'Exoplanet colony', navigateToIdx: 40},
        {text: 'Underwater kingdom', navigateToIdx: 42} 
      ],
      questionImg: 'assets/img/img26.png'
    },
    {
      id: 17, // nunchucks chefs knife ""
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Desert wasteland', navigateToIdx: 43},   
        {text: 'Abandoned city', navigateToIdx: 43},
        {text: 'Jungle', navigateToIdx: 44},
        {text: 'Wild West', navigateToIdx: 45} 
      ],
      questionImg: 'assets/img/img25.png'
    },
    {
      id: 18, // lasso + thors hammer hulk morph 
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Futuristic city', navigateToIdx: 46},    
        {text: 'Jurassic era', navigateToIdx: 47}, 
        {text: 'Exoplanet colony', navigateToIdx: 46},
        {text: 'Underwater kingdom', navigateToIdx: 47} 
      ],
      questionImg: 'assets/img/img26.png'
    },
    {
      id: 19, // spear + computer ""
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Desert wasteland', navigateToIdx: 48},   
        {text: 'Abandoned city', navigateToIdx: 49},
        {text: 'Jungle', navigateToIdx: 49},
        {text: 'Wild West', navigateToIdx: 50} 
      ],
      questionImg: 'assets/img/img25.png'
    },
    {
      id: 20, // frying pan, explording heart beatrix + wick
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Futuristic city', navigateToIdx: 51},    
        {text: 'Jurassic era', navigateToIdx: 52}, 
        {text: 'Exoplanet colony', navigateToIdx: 51},
        {text: 'Underwater kingdom', navigateToIdx: 52} 
      ],
      questionImg: 'assets/img/img26.png'
    },
    {
      id: 21, // dynamite broadsword ""
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Desert wasteland', navigateToIdx: 53},   
        {text: 'Abandoned city', navigateToIdx: 53},
        {text: 'Jungle', navigateToIdx: 54},
        {text: 'Wild West', navigateToIdx: 55} 
      ],
      questionImg: 'assets/img/img25.png'
    },
    {
      id: 22, // whisky + the force coreleone vadar
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Futuristic city', navigateToIdx: 56},    
        {text: 'Jurassic era', navigateToIdx: 57}, 
        {text: 'Exoplanet colony', navigateToIdx: 56},
        {text: 'Underwater kingdom', navigateToIdx: 58} 
      ],
      questionImg: 'assets/img/img26.png'
    },
    {
      id: 23, // velocirapt + rat poison ""
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Desert wasteland', navigateToIdx: 59},   
        {text: 'Abandoned city', navigateToIdx: 59},
        {text: 'Jungle', navigateToIdx: 60},
        {text: 'Wild West', navigateToIdx: 61} 
      ],
      questionImg: 'assets/img/img25.png'
    },
    {
      id: 32, // light saber, sharpened pencil braveheart, joker 
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Desert wasteland', navigateToIdx: 63},   
        {text: 'Abandoned city', navigateToIdx: 63},
        {text: 'Jungle', navigateToIdx: 62},
        {text: 'Wild West', navigateToIdx: 64} 
      ],
      questionImg: 'assets/img/img25.png'
    },
    {
      id: 25, // grenade, broadsword ""
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Futuristic city', navigateToIdx: 62},    
        {text: 'Jurassic era', navigateToIdx: 63}, 
        {text: 'Exoplanet colony', navigateToIdx: 62},
        {text: 'Underwater kingdom', navigateToIdx: 64} 
      ],
      questionImg: 'assets/img/img26.png'
    },
    {
      id: 26, // fart bomb, harburger phone - shrek, juno
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Futuristic city', navigateToIdx: 65},    
        {text: 'Jurassic era', navigateToIdx: 66}, 
        {text: 'Exoplanet colony', navigateToIdx: 65},
        {text: 'Underwater kingdom', navigateToIdx: 67} 
      ],
      questionImg: 'assets/img/img26.png'
    },
    {
      id: 27, //  spiked club + nerf gun ""
      question: 'What world will you choose to explore?',
      options: [
        {text: 'Desert wasteland', navigateToIdx: 68},   
        {text: 'Abandoned city', navigateToIdx: 68},
        {text: 'Jungle', navigateToIdx: 69},
        {text: 'Wild West', navigateToIdx: 70} 
      ],
      questionImg: 'assets/img/img25.png'
    },
    // From here below -- I would eventually like to disappear the blank buttons and add alt text
    {
      id: 28, 
      question: 'Robots take over your world, and your running shoes or baseball bat could not save you. THE END. Your moodvie is:',
      options: [
        {text: 'Alien directed by Ridley Scott'},   
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      questionImg: 'assets/img/img28transp.tiff'
    },
    {
      id: 29,
      question: 'You become a part of an elaborate heist gone wrong. You are on the run for the rest of your journey. THE END. Your moodvie is:',
      options: [
        { text: 'Butch Cassidy and the Sundance Kid directed by George Roy Hill' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img29.png'
    },
    {
      id: 30,
      question: 'You invent a time machine and travel to the future of your underwater world. THE END. Your moodvie is:',
      options: [
        { text: 'Back to the Future directed by Robert Zemeckis' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img30.tiff'
    },
    {
      id: 31,
      question: 'You save those you love from a catastrophic event. THE END. Your moodvie is:',
      options: [
        { text: 'The Dark Knight directed by Christopher Nolan' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img31.tiff'
    },
    {
      id: 32, 
      question: 'You experience the tragic rise and fall of a famous family, and luckily never end up in their crosshairs. THE END. Your moodvie is:',
      options: [
        { text: 'The Godfather directed by Francis Ford Coppola' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img32.png'
    },
    {
      id: 33,
      question: 'You get stranded on a deserted island for years and struggle to survive. THE END. Your moodvie is:',
      options: [
        { text: 'Cast Away directed by Robert Zemeckis' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img33.png'
    },
    {
      id: 34,
      question: 'You become a world-renowned artist and live a long, happy life. THE END. Your moodvie is:',
      options: [
        { text: 'Frida directed by Julie Taymor' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img34.png'
    },
    {
      id: 35,
      question: 'You embark on a journey to save your family and you get them back. THE END. Your moodvie is:',
      options: [
        { text: 'Taken directed by Pierre Morel' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img35.tiff'
    },
    {
      id: 36,
      question: 'You are betrayed by your closest ally. THE END. Your moodvie is:',
      options: [
        { text: 'Gladiator directed by Ridley Scott' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img36.tiff'
    },
    {
      id: 37,
      question: 'You become a detective solving a complex mystery. THE END. Your moodvie is:',
      options: [
        { text: 'Sherlock Holmes directed by Guy Ritchie' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img37.png'
    },
    {
      id: 38,
      question: 'You navigate the gritty underworld of a crime infested jungle and barely survive. THE END. Your moodvie is:',
      options: [
      { text: 'Pulp Fiction directed by Quentin Tarantino' },
      { text: '' },
      { text: '' },
      { text: '' }
      ],
      questionImg: 'assets/img/img38.png'
    },
    {
      id: 39,
      question: 'Your journey has transformed you into a short, worrisome creature with large feet. However you are also now a hero in a fantasy world. THE END. Your moodvie is:',
      options: [
        { text: 'The Lord of the Rings: The Fellowship of the Ring directed by Peter Jackson' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img39.png'
    },
    {
      id: 40,
      question: 'You lead a revolution against a tyrannical government and win. THE END. Your moodvie is:',
      options: [
        { text: 'V for Vendetta directed by James McTeigue' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img40.tiff'
    },
    {
      id: 41,
      question: 'You are a brilliant scientist who makes a groundbreaking discovery. Your moodvie is:',
      options: [
        { text: 'A Beautiful Mind directed by Ron Howard' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img41.tiff'
    },
    {
      id: 42, // 
      question: 'You witness the rise and fall of a powerful figure. Your moodvie is:',
      options: [
      { text: 'Citizen Kane directed by Orson Welles' },
      { text: '' },
      { text: '' },
      { text: '' }
     ],
      questionImg: 'assets/img/img42.tiff'
    },
    {
      id: 43,
      question: 'You find yourself in the midst of a zombie apocalypse but you save your friends and survive. THE END. Your moodvie is:',
      options: [
        { text: 'Attack the Block directed by Joe Cornish' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img43.png'
    },
    {
      id: 44,
      question: 'You are betrayed by someone you trusted and lose everything. THE END. Your moodvie is:',
      options: [
        { text: 'The Count of Monte Cristo directed by Kevin Reynolds' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img44.tiff'
    },
    {
      id: 45,
      question: 'You embark on an interstellar journey and although you never return home, you experience things no one ever will. THE END Your moodvie is:',
      options: [
        { text: 'Interstellar directed by Christopher Nolan' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img45.png'
    },
    {
      id: 46,
      question: 'You witness the collapse of a powerful empire and build your own. THE END. Your moodvie is:',
      options: [
        { text: 'Ran directed by Akira Kurosawa' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img46.tiff'
    },
    {
      id: 47, 
      question: 'You discover you have superpowers to make things invisible and you punish the criminals living in your underwater world. THE END. Your moodvie is:',
      options: [
        { text: 'Spider-Man directed by Sam Raimi' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img9.tiff'
    },
    {
      id: 48,
      question: 'You uncover a haunting family secret and it results in the end of your world. THE END. Your moodvie is:',
      options: [
        { text: 'The Others directed by Alejandro Amenábar' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img48.png'
    },
    {
      id: 49,
      question: 'You experience a strange phenomenon that defies explanation but discover the meaning of life. THE END. Your moodvie is:',
      options: [
        { text: 'Everything Everywhere All at Once directed by Daniel Kwan and Daniel Scheinert' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img49.tiff'
    },
    {
      id: 50,
      question: 'You are hunted by a monstrous creature for the rest of your life. THE END. Your moodvie is:',
      options: [
        { text: 'The Thing directed by John Carpenter' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img50.png'
    },
    {
      id: 51,
      question: 'In this world, you make new friends quickly and enemies quicker. You survive by the skin of your teeth. THE END. Your moodvie is:',
      options: [
      { text: 'Fight Club directed by David Fincher' },
      { text: '' },
      { text: '' },
      { text: '' }
      ],
      questionImg: 'assets/img/img51.png'
    },
    {
      id: 52,
      question: 'You become obsessed with trying to find your way back home, and you never do. THE END. Your moodvie is:',
      options: [
        { text: 'Se7en directed by David Fincher' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img52.png'
    },
    {
      id: 53,
      question: 'You discover a secret world hidden in plain sight and now you must live in hiding for the rest of your life. THE END. Your moodvie is:',
      options: [
        { text: 'The Matrix directed by the Wachowskis' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img53.png'
    },
    {
      id: 54,
      question: 'You lead a rebellion against an oppressive regime. You win. THE END. Your moodvie is:',
      options: [
        { text: 'The Hunger Games directed by Gary Ross' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img54.png'
    },
    {
      id: 55,
      question: 'You are caught in a deadly game of cat and mouse that you cannot escape. THE END. Your moodvie is:',
      options: [
      { text: 'Basic Instinct directed by Paul Verhoeven' },
      { text: '' },
      { text: '' },
      { text: '' }
      ],
      questionImg: 'assets/img/img55.tiff'
    },
    {
      id: 56,
      question: 'You become a renowned detective solving the toughest cases. Your moodvie is:',
      options: [
        { text: 'Sherlock Holmes directed by Guy Ritchie' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img56.png'
    },
    {
      id: 57,
      question: 'You become famous for your courageous exploration venturing into the unknown. THE END. Your moodvie is:',
      options: [
        { text: 'Indiana Jones and the Last Crusade directed by Steven Spielberg' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img57.png'
    },
    {
      id: 58,
      question: 'You become possessed by a malevolent entity. It does not end well. THE END. Your moodvie is:',
      options: [
      { text: 'The Exorcist directed by William Friedkin' },
      { text: '' },
      { text: '' },
      { text: '' }
      ],
      questionImg: 'assets/img/img58.tiff'
    },
    {
      id: 59,
      question: 'You become a legendary warrior in an epic battle. You live to see yourself become the villain in your own story. THE END. Your moodvie is:',
      options: [
        { text: '300 directed by Zack Snyder' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img59.png'
    },
    {
      id: 60,
      question: 'You are a brilliant scientist making a groundbreaking discovery. Your moodvie is:',
      options: [
        { text: 'The Theory of Everything directed by James Marsh' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img60.tiff'
    },
    {
      id: 61,
      question: 'You find yourself in a dystopian future of your nightmares. THE END. Your moodvie is:',
      options: [
        { text: 'Blade Runner 2049 directed by Denis Villeneuve' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img61.png'
    },
    {
      id: 62,
      question: 'You are a fearless adventurer exploring ancient ruins. You become famous for your finds. THE END. Your moodvie is:',
      options: [
        { text: 'Tomb Raider directed by Roar Uthaug' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img62.png'
    },
    {
      id: 63,
      question: 'You discover a conspiracy that threatens the world. You save the world from destruction. THE END. Your moodvie is:',
      options: [
        { text: 'The Bourne Identity directed by Doug Liman' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img63.png'
    },
    {
      id: 64, // DONE
      question: 'You become the ringleader of a large gang that takes over the West. THE END. Your moodvie is:',
      options: [
        { text: 'Unforgiven directed by Clint Eastwoood' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img10.tiff'
    },
    {
      id: 65,
      question: 'You witness the destruction caused by a giant monster but you save the city. THE END. Your moodvie is:',
      options: [
      { text: 'Godzilla Minus One directed by Takashi Yamazaki' },
      { text: '' },
      { text: '' },
      { text: '' }
      ],
      questionImg: 'assets/img/img65.tiff'
    },
    {
      id: 66,
      question: 'You are caught in a complex web of lies and deceit that you cannot escape. THE END. Your moodvie is:',
      options: [
        { text: 'Parasite directed by Bong Joon-ho' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img66.tiff'
    },
    {
      id: 67,
      question: 'You become a renowned chef opening your own restaurant. Your moodvie is:',
      options: [
        { text: 'Chef directed by Jon Favreau' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img67.tiff'
    },
    {
      id: 68,
      question: 'You struggle with delinquency and harsh realities for the rest of your journey. THE END. Your moodvie is:',
      options: [
        { text: 'The 400 Blows directed by François Truffaut' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img68.tiff'
    },
    {
      id: 69,
      question: 'You find yourself in a magical world full of wonders. THE END. Your moodvie is:',
      options: [
        { text: 'Harry Potter and the Sorcerer\'s Stone directed by Chris Columbus' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      questionImg: 'assets/img/img69.tiff'
    },
    {
      id: 70,
      question: 'You find yourself in a nightmarish reality you must fight to escape. THE END. Your moodvie is:',
    options: [
      { text: 'The Babadook directed by Jennifer Kent' },
      { text: '' },
      { text: '' },
      { text: '' }
    ],
      questionImg: 'assets/img/img70.tiff'
    }
  ];


  
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