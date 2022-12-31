const refs = {
  startBtn: document.querySelector('#startBtn'),
  stopBtn: document.querySelector('#stopBtn'),
  output: document.querySelector('#output'),
};

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

let startingTime;
let intervalId;

function lag() {
  setTimeout(() => {
    for (let i = 0; i < 200_000; i++) {
      console.log(i);
    }
  }, 5000);
}

function start() {
  startingTime = Date.now();

  intervalId = setInterval(() => {
    const elapsedTime = Date.now() - startingTime;

    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
    const hours = Math.floor(elapsedTime / 1000 / 60 / 60) % 24;

    const secondsStr = seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });

    const minutesStr = minutes.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });

    const hoursStr = hours.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });

    refs.output.innerHTML = `${hoursStr}:${minutesStr}:${secondsStr}`;
  }, 1000);

  // Симуляємо зависання
  // lag();
}

function stop() {
  clearInterval(intervalId);
}
