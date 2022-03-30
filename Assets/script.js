// Timer starts at 100 seconds
// Timer loses 15 seconds if you answer incorrectly
// End of quiz has a place to store high scores (in local storage)
// High Score list displayed (get from local storage) - can be different html page
// High Score list can be cleared
// Back button to bring you back to the start page


// Build out HTML elements and then grab and store within variables
console.log("hello");
var startQuizBtn = document.getElementById("start-quiz");
var startScreenEl = document.getElementById("start-screen");
var timeCount = document.getElementById("time-count");
var highScoreBtn = document.getElementById("high-score");
var quizEl = document.getElementById("quiz");
var question = document.getElementById("question");
var questionTitleEl = document.getElementById("question-title");
var answerChoicesEl = document.getElementsByClassName("answer");


// Source Questions - create an array of objects that holds all of the questions
    // Answer choices
    // Question test
    // Correct answer

let questions = [{
    question: "What does HTML stand for?",
    choiceA: "Hypertext Markup Language",
    choiceB: "Hyperlinks and Text Markup Langauge",
    choiceC: "Home Translations by Mother in Law",
    choiceD: "Hyper Text Markings & Language",
    correct: "A"
},
{
    question: "What does CSS stand for?",
    choiceA: "Castaway Style Sheets",
    choiceB: "Cascading Style Sheets",
    choiceC: "CS Lewis",
    choiceD: "Give me a break, man!",
    correct: "B"
},{
    question: "Why do developers learn JavaScript?",
    choiceA: "It allows us to implement complex features",
    choiceB: "They want to be driven mad",
    choiceC: "It's the main langauge of Twitter",
    choiceD: "Do not click this one",
    correct: "A"
},{
    question: "What is the most popular scripting language?",
    choiceA: "JavaScript",
    choiceB: "Python",
    choiceC: "C++",
    choiceD: "Klingon",
    correct: "A"
}
]
console.log(questions);



// Create a startQuiz function triggered by the start button (event listen)
    // Hide start screen
    // Unhide question screen
    // Start Timer
    // grab first question from the array --> can store question array in another js file and link
let timer;

    startQuizBtn.addEventListener("click", function() {
        startScreenEl.classList.add("hidden");
        quizEl.classList.remove("hidden");
        counterRender();
        timer = setInterval(counterRender,1000);
        renderQuestion();
    });

// Create a functin to getQuestion
    // Render title, choices, and buttons

    let lastQuestionIndex = questions.length - 1;
    let runningQuestionIndex = 0;
    
    function renderQuestion() {
        let q = questions[runningQuestionIndex];
        question.innerHTML = "<p>" + q.question + "</p>";
        A.innerHTML = `A: ${q.choiceA}`;
        B.innerHTML = `B: ${q.choiceB}`;
        C.innerHTML = "C: " + q.choiceC;
        D.innerHTML = "D: " + q.choiceD;
    };

// Create a function to check if an answer is correct
    //if the answer is correct, show next question
    //if the answer is wrong, decrement the timer, and then show next question
    //keep track of points for final score at the end
    //Increment index in array of question to move on to the next question
function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer ){
        score = score + 10;
        answerIsCorrect();
        //show next question
    }else{
        score = score - 10;
        answerIsWrong();
        timeCount = timeCount + 15;
        //decrease timer by 15 seconds
    };

    if(runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++;
        questionRender();
    }else{
        clearInterval(timer);
        endGame(); //Take to High Score Page
    };
}

//Render Time Count
var quizTime = 100; //100 sec overall
timeCount = 0;

function counterRender(){
    if(timeCount <= quizTime){
        timeCount.innerHTML = "Time Remaining: " + timeCount;
        timeCount++;
        console.log("start timer")
    }else{
        timeCount = 100;
        clear
    }
}

//Render Score
function scoreRender() {
    scoreContainer.style.display = "block";
    let scoreCount = score;
}

//Create a function to end the quiz
    //Hide question element
    //Unhide the end of game/end of quiz element
    //Unhide your final score element, form, submit button
function endGame() {
    //hide quiz id
    // unhide score-container id
}

//Saving Highscores
    //Save to local storage via setter

