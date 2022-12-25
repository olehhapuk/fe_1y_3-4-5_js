const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const outputElem = document.querySelector('#output');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const randomNumber = randomIntegerFromInterval(0, 10);
    outputElem.textContent = randomNumber;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  if (!intervalId) {
    return;
  }

  clearInterval(intervalId);
  intervalId = null;
});
