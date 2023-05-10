var count = 0
var startEl = document.querySelector(".start-Btn")
var countEl = document.querySelector(".count")
var buttonList = document.querySelector("#buttons")


// countdown timer 80 secs
function countdown() {
  var timeLeft = 80;
  var timeInterval = setInterval(function () {
    countEl.textContent = timeLeft + " seconds left.";
    timeLeft--; 
    if (timeLeft < 0) {
      clearInterval(timeInterval)
      countEl.textContent = " "
    }
  }, 1000);
}

// Questions to load along with answer buttons

// Displays question
function loadQuestionOne () {
    var displayQuestion = document.querySelector("#question")
    var i=0
    // Pulls the question
    displayQuestion.innerText = questions[i].question;
    // Creates the Answer buttons
    questions[i].answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        // Makes Answer buttons appear
        buttonList.appendChild(button)
    })
}

// Checks answers and allows for the reduction of time and addition of points
function questionCheck(event){
    let buttonEl = event.target;
    if (buttonEl.value == questions[currentIndex].correct){
        console.log("correct")
    } else (buttonEl.value !== questions[currentIndex].correct)  
        console.log ("wrong")
}



// when start-btn is clicked...
startEl.addEventListener("click", function() {
    countdown()
    loadQuestionOne()
});

// when an answer button is clicked
buttonList.addEventListener("click", function(){
questionCheck()
})


//questions
var questions = [
    {
        question: "Question One: 2+2?",
        answers: [
            {text: "4", correct:true},
            {text: "22", correct: false},
        ]
    },
    {
        question: "2+3?",
        answers: [
            {text: "5", correct: true},
            {text: "23", correct: false},
        ]
    },
    {
        question: "2+4",
        answers: [
            {text: "6", correct: true},
            {text: "24", correct: false}
        ]
    },
    {
        question: "2+5",
        answers: [
            {text: "7", correct: true},
            {text: "25", correct: false}
        ]
    }
]
