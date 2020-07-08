

// predetermined data to include
    // DOM elements
    const startEl = document.getElementById("startBtn");
    const triviaEl = document.getElementById("trivia")
    
    const questionEl = document.getElementById("question")
    const choices0 = document.querySelector("#choices-0");
    const choices1 = document.querySelector("#choices-1");
    const choices2 = document.querySelector("#choices-2");
    
    const timerEl = document.getElementById("timer");
    const scoreEl = document.getElementById("score");    

    
    // variables
    var score = 0;
    var secondsLeft = 180;


    // Question bank
    let questions = [
        {  //1
            question: "Who was the murderer in \"Friday the 13th\"?", 
            choices: ["Pamela Vorhees", "Jason Vorhees", "Jeffrey Vorhees"],
            correct: 0
        },
        
        { //2
            question: "In \"The Shining\", what is the name of the hotel that Jack and family look after?", 
            choices: ["The Redrum Inn", "The Overlook Hotel", "Hotel Artemis"],
            correct: 1
        },
        
        { //3
            question: "In \"The Silence of the Lambs\", in which city is Dr. Lecter imprisoned?", 
            choices: ["Detroit", "Chicago", "Baltimore"],
            correct: 2
        },
        
        { //4
            question: "In \"A Nightmare on Elm Street\", which animal does Tina see in her dreams?", 
            choices: ["Calf", "Doe", "Lamb"],
            correct: 2 
        },
        
        { //5
            question: "What is the name of the goat in \"The VVitch\"?", 
            choices: ["Black Phillip", "Maurice", "Black Peter"], 
            correct: 0
        },
        
        { //6
            question: "In \"Get Out\", what does Chris use to NOT get sent to the sunken place?", 
            choices: ["nylon", "cotton", "twill"],
            correct: 1
        },
        
        { //7
            question: "What is the name of the demon in \"The Excorist\"?", 
            choices: ["Pazuzu", "Zazu", "Azazel"],
            correct: 0
        },
        
        { //8
            question: "What numbers keep appearing in \"Us\"?", 
            choices: [42, "11:11", "22:22"], 
            correct: 1
        },
        
        { //9
            question: "How many people died in \"The Babadook\"?", 
            choices: ["None", "a few", "a lot"],
            correct: 0
        },
        
        { //10
            question: "Which movie has the tagline: \"We dare you to say his name 5 times\"?", 
            choices: ["The Muffin Man", "Freddy Kreuger", "Candyman"],
            correct: 2
        },

        { //11
            question: "Who was the first \"scream queen\" of a horror franchise?",
            choices: ["Heather Langenkamp", "Jamie Lee Curtis", "Neve Campbell"],
            correct: 1
        },

        { //12
            question: "\"Hellraiser 3\" was filmed on which street in Greenboro, NC?",
            choices: ["Elm Street", "Hell Drive", "Freddy Lane"],
            correct: 0
        },

        { //13
            question: "What was the name of the psychic in \"Poltergeist\" I and II?",
            choices: ["Queen of Swords", "Miss Cleo", "Tangina"],
            correct: 2
        },
    ]

    console.log(questions)

// FUNCTIONS =========================================================================

// click start button

// countdown timer

// running questions
const lastQuestion = questions.length - 1;
let runningQuestion = 0

function showQuestion() {
    let q = questions[runningQuestion];
    
    // setting up the questions and responses to display
    questionEl.innerHTML = `<p> ${q.questionEl} </p>`;
    choices0.innerHTML = q.choices[0];
    choices1.innerHTML = q.choices[1];
    choices2.innerHTML = q.choices[2];
    
    //how do I show the correct answer?
};

startEl.style.display = "none";
showQuestion();
triviaEl.style.display = "block"; // why block and not show?

console.log(showQuestion);


// user input ===========================================================================


// if else statement
    // if correct,
    // alert right answer
    // display right answer at bottom
    // add +1 to score
    // then move on to next question
        // clear screen
    
    // else if wrong
    // alert wrong answer
    // remove 10 seconds from timer 
    // then move on to next question
        // clear screen


// when the timer reaches 0, then...
    // timer is done
    // all questions are asked
    // clear screen



// Display Input ========================================================================
    
// Game Over!
    // Save your initials into the score card!
        // function scoreboard(params) {};

    // Play again? button
        // return to top of quiz

