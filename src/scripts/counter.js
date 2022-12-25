const timeElem = document.querySelector('.time');

let elapsedSeconds = 0;
setInterval(() => {
  elapsedSeconds++;
  timeElem.textContent = elapsedSeconds;
}, 1000);

setTimeout(() => {
  for (let i = 0; i < 100_000; i++) {
    console.log(i);
  }
}, 5000);
