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
  countdown();
  
// event listener for start button -- timer is decrementing in number instead of starting the timer//
var count = 0;
var startEl = document.querySelector("#start-timer")
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

startEl.addEventListener("click", function() {
  count--;
  setCounterText()
});

// prompt questions -- My questions aren't appearing on the screen//

