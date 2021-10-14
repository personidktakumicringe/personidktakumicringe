var score;
var duration = 10;
var startTime;
var ended = true;

var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");
var clickArea = document.getElementById("clickarea");

var show = function (elem) {
  elem.style.display = "inline";
};

var hide = function (elem) {
  elem.style.display = "none";
};

function startGame() {
  hide(startBtn);
  score = -1;
  ended = false;

  startTime = new Date().getTime();

  var timerId = setInterval(function () {
    var total = (new Date().getTime() - startTime) / 1000;

    if (total < duration) {
      timerTxt.textContent = total.toFixed(3);
      clicksTxt.textContent = (score / total).toFixed(2);
    } else {
      ended = true;
      clearInterval(timerId);
    }
  }, 1);
}

startBtn.addEventListener("click", function (e) {
  startGame();
});

clickArea.addEventListener("click", function (e) {
  if (!ended) {
    score++;
    scoreTxt.textContent = score;
  }
});

resetBtn.addEventListener("click", function (e) {
  if (ended) {
    scoreTxt.textContent = " ";
    timerTxt.textContent = " ";
    clicksTxt.textContent = " ";
    show(startBtn);
  }
});
