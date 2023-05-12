var count = 0
var startEl = document.querySelector(".start-Btn")
var countEl = document.querySelector(".count")
var buttonList = document.querySelector("#buttons")
var currentIndex = 0
var score = 0

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
var buttonEl = event.target;
        console.log(questions[currentIndex])
        console.log(buttonEl.textContent)
        // when the answer is selected
    if (buttonEl.textContent == questions[currentIndex].correct){
        // add one point
        score++;
        console.log("correct");
        // when the incorrect answer is selected
    } else   {
        // reduce the count by 10
        count - 10
        console.log ("wrong")
    }
}



// when start-btn is clicked...
startEl.addEventListener("click", function() {
    countdown()
    loadQuestionOne()
});

// when an answer button is clicked
buttonList.addEventListener("click", questionCheck)


//questions
var questions = [
    {
        question: "Question One: 2+2?",
        answers: [
            {text: "4"},
            {text: "22"},
        ],
        correct: "4"
    },
    {
        question: "2+3?",
        answers: [
            {text: "5"},
            {text: "23"},
        ],
        correct: "5"
    },
    {
        question: "2+4",
        answers: [
            {text: "6"},
            {text: "24"}
        ],
        correct: "6"
    },
    {
        question: "2+5",
        answers: [
            {text: "7"},
            {text: "25"}
        ],
        correct: "7"
    }
]
