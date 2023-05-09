// countdown timer 80 secs

var timerEl = document.getElementById("count");


timerEl.addEventListener ("click"), function() {
    countdown()
}

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
