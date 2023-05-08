// countdown timer 80 secs -- Timer is automatically starting instead of starting when I select the start button//

var timerEl = document.getElementById("count");

function countdown() {
  var timeLeft = 80;

  var timeInterval = setInterval(function () {

    timerEl.textContent = timeLeft + " seconds left.";
    timeLeft--; 

    if (timeLeft < 0) {
      clearInterval(timeInterval)
      timerEl.textContent = " "
    }
  }, 1000);
}
  
// event listener for start button -- timer is decrementing in number instead of starting the timer//
var count = 0;
var startEl = document.querySelector("#start-timer");
var countEl = document.querySelector("#count");
var buttonList = document.querySelector("#buttons")

function setCounterText() {
  countEl.textContent = count;
}

startEl.addEventListener("click", function() {
  countdown();
  loadQuestion();
});
//question display
function loadQuestion () {
    var displayQuestion = document.querySelector("#questionOne")
    var i=0

    

    // pulls the question
    displayQuestion.innerText= questions[i].question;
    // creates the answer button
    questions[i].answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText= answer.text
        // makes buttons appear
    buttonList.appendChild(button)
    })

}

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
    }
    {
        question: "2+5",
        answers: [
            {text: "7", correct: true},
            {text: "25", correct: false}
        ]
    }
]
