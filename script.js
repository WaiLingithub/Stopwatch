const stopwatchTag = document.querySelector(".stopwatch");

const startButtonTag = document.querySelector(".start");
const pauseButtonTag = document.querySelector(".pause");
const continueButtonTag = document.querySelector(".continue");
const restartButtonTag = document.querySelector(".restart");
const millisecondsTag = document.getElementsByClassName("miliseconds")[0];

let milliseconds = 0;
let seconds = 0;
let minuts = 0;
let hours = 0;

const startTime = () => {
  milliseconds += 1;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds += 1;
  }
  if (seconds === 60) {
    seconds = 0;
    minuts += 1;
  }

  if (minuts === 60) {
    minuts = 0;
    hours += 1;
  }

  millisecondsTag.textContent = milliseconds;
  let secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
  let minutsText = minuts < 10 ? "0" + minuts.toString() : minuts;
  let hoursText = hours < 10 ? "0" + hours.toString() : hours;
  stopwatchTag.textContent = `${hoursText}:${minutsText}:${secondsText}`;
};

let intervalId;
startButtonTag.addEventListener("click", () => {
  if (milliseconds > 0) {
    return;
  }
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1);
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
  if (seconds === 0) {
    return;
  }
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1);
});

restartButtonTag.addEventListener("click", () => {
  if (seconds === 0) {
    return;
  }
  clearInterval(intervalId);
  seconds = 0;
  minuts = 0;
  hours = 0;
  intervalId = setInterval(startTime, 1);
});
