$(document).ready(function(){


// predetermined data to include
    // DOM elements
    const startEl = document.getElementById("startBtn");
    const introEl = document.getElementById("intro");
    const nextEl = document.getElementById("nextBtn");
    const questionContainer = document.getElementById("questionContainer");
    // const triviaEl = document.getElementById("trivia");

    
    const questionEl = document.getElementById("question");
    // const correctEl = document.getElementById("correct");
    const answerButtons = document.getElementById("answerButtons");
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
            answers: [
                { text: "Pamela Vorhees", correct: true },
                { text: "Jason Vorhees", correct: false },
                { text: "Jeffrey Vorhees", correct: false },
            ]
        },
        
        { //2
            question: "In \"The Shining\", what is the name of the hotel that Jack and family look after?", 
            answers: [
                { text: "The Redrum Inn", correct: false },
                { text: "The Overlook Hotel", correct: true },
                { text: "Hotel Artemis", correct: false }
            ]
        },
        
        { //3
            question: "In \"The Silence of the Lambs\", in which city is Dr. Lecter imprisoned?", 
            answers: [
                { text: "Detroit", correct: false },
                { text: "Chicago", correct: false },
                { text: "Baltimore", correct: true },
            ]
        },
        
        { //4
            question: "In \"A Nightmare on Elm Street\", which animal does Tina see in her dreams?", 
            answers: [
                { text: "Calf", correct: false },
                { text: "Doe", correct: false },
                { text: "Lamb", correct: true },
            ],
        },
        
        { //5
            question: "What is the name of the goat in \"The VVitch\"?", 
            answers: [
                { text: "Black Phillip", correct: true },
                { text: "Maurice", correct: false },
                { text: "Black Peter", correct: false },
            ], 
        },
        
        { //6
            question: "In \"Get Out\", what does Chris use to NOT get sent to the sunken place?", 
            answers: [
                { text: "nylon", correct: false },
                { text: "cotton", correct: true },
                { text: "twill", correct: false },
            ],
        },
        
        { //7
            question: "What is the name of the demon in \"The Excorist\"?", 
            answers: [
                { text: "Pazuzu", correct: true },
                { text: "Zazu", correct: false },
                { text: "Azazel", correct: false },
            ],
        },
        
        { //8
            question: "What numbers keep appearing in \"Us\"?", 
            answers: [
                { text: 42, correct: false },
                { text: "11:11", correct: true },
                { text: "22:22", correct: false },
            ], 
         },
        
        { //9
            question: "How many people died in \"The Babadook\"?", 
            answers: [
                { text: "none", correct: true },
                { text: "a few", correct: false },
                { text: "a lot", correct: false },
            ],
        },
        
        { //10
            question: "Which movie has the tagline: \"We dare you to say his name 5 times\"?", 
            answers: [
                { text: "The Muffin Man", correct: false },
                { text: "13 Ghosts", correct: false },
                { text: "Candyman", correct: true },
            ],
        },

        { //11
            question: "Who was the first \"scream queen\" of a horror franchise?",
            answers: [
                { text: "Heather Langenkamp", correct: false },
                { text: "Jamie Lee Curtis", correct: true },
                { text: "Neve Campbell", correct: false },
            ],
        },

        { //12
            question: "\"Hellraiser 3\" was filmed on which street in Greenboro, NC?",
            answers: [
                { text: "Elm Street", correct: true },
                { text: "Hell Drive", correct: false },
                { text: "Freddy Lane", correct: false },
            ],
        },

        { //13
            question: "What was the name of the psychic in \"Poltergeist\" I and II?",
            answers: [
                { text: "Queen of Swords", correct: false },
                { text: "Miss Cleo", correct: false },
                { text: "Tangina", correct: true },
            ],
        },
    ]

    // console.log(questions)

// FUNCTIONS =========================================================================

// click start button to start game
startEl.addEventListener("click", startGame)
nextEl.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    // console.log("started");
  
    //hide start button on press
    if (startEl.style.display === "none") {
       startEl.style.display = "block";
   } else {
       startEl.style.display = "none"
   }

   //hide intro text on press
   if (introEl.style.display === "none") {
       introEl.style.display = "block";
  } else {
       introEl.style.display = "none"
  }

   //show questionContainer on press
   if (questionContainer.style.display === "block") {
    questionContainer.style.display = "none";
   } else {
    questionContainer.style.display = "block"
   }
   
   // ask them questions
   shuffledQuestions = questions.sort(() => Math.random() - .5);
   currentQuestionIndex = 0

   setNextQuestion ();
};

// shuffle questions
function setNextQuestion (){
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

// show questions
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button)
    });
}

// getting the right answers
function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
};


// check if it is correct?
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("incorrect")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("incorrect")
}

// countdown timer
// startEl.addEventListener("click", function() {
//     startEl.style.display = "none";
//     var myInterval = setInterval(function () {
//         timerEl.textContent = secondsLeft;
//         secondsLeft--;
//         if (secondsLeft === -1) {
//             clearInterval(myInterval);
//         }
//     }, 1000);
// }

// running questions
let shuffledQuestions, currentQuestionIndex



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
});