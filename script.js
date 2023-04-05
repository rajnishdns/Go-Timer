const timerDisplay = document.querySelector('.countdown-timer');
const plusButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const audio = document.getElementById('alarm');

let timeInSeconds = 900; // 15 minutes in seconds
let countdownTimer;

function displayTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  timerDisplay.textContent = `${minutes}:${seconds}`;
}

displayTime(timeInSeconds);

function startCountdown() {
  countdownTimer = setInterval(() => {
    if (timeInSeconds <= 0) {
      clearInterval(countdownTimer);
      timerDisplay.textContent = 'Time is up!';
      audio.play()
      return;
    }
    timeInSeconds--;
    displayTime(timeInSeconds);
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownTimer);
}

function resetCountdown() {
  clearInterval(countdownTimer);
  timeInSeconds = 900;
  displayTime(timeInSeconds);
}

function addMinute() {
  timeInSeconds += 60;
  displayTime(timeInSeconds);
}

function subtractMinute() {
  if (timeInSeconds <= 60) {
    return;
  }
  timeInSeconds -= 60;
  displayTime(timeInSeconds);
}

plusButton.addEventListener('click', addMinute);
minusButton.addEventListener('click', subtractMinute);
startButton.addEventListener('click', startCountdown);
stopButton.addEventListener('click', stopCountdown);
resetButton.addEventListener('click', resetCountdown);