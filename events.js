const startBtn = document.querySelector('#startTimer');
const stopBtn = document.querySelector('#stopTimer');

console.dir(startBtn);

let id;

startBtn.addEventListener('click', () => {
  if (id !== undefined) {
    return;
  }

  id = setInterval(() => {
    console.log(new Date().toTimeString());
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(id);
  id = undefined;
});
