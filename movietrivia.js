$(document).ready(function(){


// predetermined data to include
    // DOM elements
    const startEl = document.getElementById("startBtn");
    const introEl = document.getElementById("intro");
    const nextEl = document.getElementById("nextBtn");
    const questionContainer = document.getElementById("questionContainer");
    
    const questionEl = document.getElementById("question");
    const answerButtons = document.getElementById("answerButtons");
    
    const timerEl = document.getElementById("timer");
    const scoreEl = document.getElementById("score");
    
    //timer


// This code will run as soon as the page loads
window.onload = function() 
{
  $("#loseTime").on("click", stopwatch.loseTime);
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = 
{

  time: 180,


  reset: function() 
  {

    stopwatch.time = 180;


    // DONE: Change the "display" div to "00:00."
    $("#timer").text("03:00");

  },

  start: function() 
  {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() 
  {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  
  count: function() 
  {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;
    //console.log("time: "+stopwatch.time)

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#timer").text(converted);
  },
  loseTime: function() 
  {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time-=10;
    //console.log("time: "+stopwatch.time)

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#timer").text(converted);
  },
  timeConverter: function(t) 
  {
    //t=1
    //min0
    //min=00
    //sec1
    //sec=01
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};


    //end of timer


    // variables
    var score = 0;

    const startingMinutes = 3;
    let secondsLeft = startingMinutes * 60;


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

    // running questions
    let shuffledQuestions, currentQuestionIndex

    // console.log(questions)

// FUNCTIONS =========================================================================

// countdown timer
// setInterval(updateTimer, 1000)

// function updateTimer() {
//     timerEl.innerHTML = secondsLeft;
//     secondsLeft--;
//     if (secondsLeft === 0) {
//         clearInterval(timerInterval);
//         // endGame()
//       }
// }
// ask them questions
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0


// click start button to start game
startEl.addEventListener("click", startGame)
nextEl.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    // console.log("started");
  
    stopwatch.start();
  
    setNextQuestion ();
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
};


// shuffle questions
function setNextQuestion (){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

// show questions
function showQuestion(question) {
    if(currentQuestionIndex<12){

  
    questionEl.innerText ="";
    // adding the question to the question id
    questionEl.innerText = question.question;
    console.log(question.question);
    // for each question, do this...
    question.answers.forEach(answer => {
      // create a button for each answer option
      const button = document.createElement("button")
      // add the possible answers to the inside of the button
      button.innerText = answer.text
      // add the class "btn" to the button for styling
      button.classList.add("btn")
      // if user choise of button is correct, 
      if (answer.correct) {
        // display the red/green styling
        button.dataset.correct = answer.correct
      }
      // listen for the click and add button when pressed
      button.addEventListener('click', selectAnswer)
      answerButtons.appendChild(button)
    })
}else{
    alert("gameOver");
    //stop the time
    //display results

}
  }
//showQuestion(questions);
  //console.log(showQuestion)

// removing the old questions
function resetState() {
    // if no reset, the answers will pile up and not clear
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild)
    }
  }

// getting the right answers
function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    console.log(correct);
    if(correct =="true"){
        //increase score val
        score++;
        console.log(score);
        document.querySelector("#score").innerHTML=score;
    }else{
        //take away 10 sec
        console.log("wrong");
        stopwatch.loseTime();
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => { // need to go over w tutor
        setStatusClass(button, button.dataset.correct)
    })
};



// check if it is correct --> changing between the colors (red/green)
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")

    } else {
        element.classList.add("incorrect")
    }
}


// removing the status of answers
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("incorrect")
}


// when the timer reaches 0, then...
    // timer is done
    // clear screen



// Display Input ========================================================================
    
// Game Over!
    // function endGame() {
    //     if (questionContainer.style.display === "none") {
    //         questionContainer.style.display = "block";
    //        } else {
    //         questionContainer.style.display = "none"
    //        }
    // }

    // Save your initials into the score card!
        // function scoreboard(params) {};

    // Play again? button
        // return to top of quiz
});