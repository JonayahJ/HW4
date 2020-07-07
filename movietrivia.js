

// predetermined data to include
    // score counter starts at 0 (+1)
    // timer (75 seconds)
    // variables
    var score = 0

    // objects ---> question bank

    var movieTrivia = [
        { 
            question: "Who was the murderer in \"Friday the 13th\"?", 
            choices: ["Pamela Vorhees", "Jason Vorhees", "Jeffrey Vorhees"],
            correct: 0
        },
        
        { 
            question: "In \"The Shining\", what is the name of the hotel that Jack and family look after?", 
            choices: ["The Redrum Inn", "The Overlook Hotel", "Hotel Artemis"],
            correct: 1
        },
        
        { 
            question: "In \"The Silence of the Lambs\", in which city is Dr. Lecter imprisoned?", 
            choices: ["Detroit", "Chicago", "Baltimore"],
            correct: 2
        },
        
        { 
            question: "In \"A Nightmare on Elm Street\", which animal does Tina see in her dreams?", 
            choices: ["calf", "doe", "Lamb"],
            correct: 2 
        },
        
        { 
            question: "What is the name of the goat in \"The VVitch\"?", 
            choices: ["Black Phillip", "Maurice", "Black Peter"], 
            correct: 0
        },
        
        { 
            question: "In \"Get Out\", what does Chris use to NOT get sent to the sunken place?", 
            choices: ["nylon", "cotton", "twill"],
            correct: 1
        },
        
        { 
            question: "What is the name of the demon in \"The Excorist\"?", 
            choices: ["Pazuzu", "Zazu", "Azazel"],
            correct: 0
        },
        
        { 
            question: "What numbers keep appearing in \"Us\"?", 
            choices: [42, "11:11", "22:22"], 
            correct: 1
        },
        
        { 
            question: "How many people died in \"The Babadook\"?", 
            choices: ["None", "a few", "a lot"],
            correct: 0
        },
        
        { 
            question: "Which movie has the tagline: \"We dare you to say his name 5 times\"?", 
            choices: ["The Muffin Man", "Freddy Kreuger", "Candyman"],
            correct: 2
        },

        {
            question: "Who was the first \"scream queen\" of a horror franchise?",
            choices: ["Heather Langenkamp", "Jamie Lee Curtis", "Neve Campbell"],
            correct: 1
        },

        {
            question: "\"Hellraiser 3\" was filmed on which street in Greenboro, NC?",
            choices: ["Elm Street", "Hell Drive", "Freddy Lane"],
            correct: 0
        },

        {
            question: "What was the name of the psychic in \"Poltergeist\" I and II?",
            choices: ["Queen of Swords", "Miss Cleo", "Tangina"],
            correct: 2
        },
    ]

    // console.log(movieTrivia)

// click start button
// addEventListener(onclick)

// timer starts
function setTime() { // has two conditions that need to be met (first condition is in seconds and the second condition is in milliseconds)
    var timerInterval = setInterval(function() {
      secondsLeft--; // must count down or it will continue forever
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval); // making the function stop
        sendMessage();
      }
  
    }, 1000); // equals 1 second because these are milliseconds
  }

// first question pops up


// user input


// if else statement
    // if correct,
    // then move on to next question
    // else remove time and move on


// when the timer reaches 0, then...
    // timer is done
    // all questions are asked


// Game Over



// Save your initials into the score card!



// play again button

