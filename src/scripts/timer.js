export class Timer {
  static ActionType = {
    Pause: 'pause',
    Resume: 'resume',
  };

  constructor(
    startBtnSelector,
    stopBtnSelector,
    pauseBtnSelector,
    outputSelector
  ) {
    this.startBtn = document.querySelector(startBtnSelector);
    this.stopBtn = document.querySelector(stopBtnSelector);
    this.pauseBtn = document.querySelector(pauseBtnSelector);
    this.outputElem = document.querySelector(outputSelector);

    this.startBtn.addEventListener('click', this.start.bind(this));
    this.stopBtn.addEventListener('click', this.stop.bind(this));
    this.pauseBtn.addEventListener('click', this.togglePause.bind(this));

    this.startingTime = null;
    this.intervalId = null;
    this.pauseTime = null;
  }

  togglePause(e) {
    // actionType === Timer.ActionType.Pause && this.pause(); // Run this.pause if actionType is 'pause'

    const actionType = e.target.dataset.action;
    if (actionType === Timer.ActionType.Pause) {
      this.pause();
    } else {
      this.resume();
    }
  }

  pause() {
    clearInterval(this.intervalId);
    this.pauseTime = Date.now();

    // Change puse button state
    this.pauseBtn.dataset.action = Timer.ActionType.Resume;
    this.pauseBtn.textContent = 'Продовжити';
  }

  resume() {
    const elapsedPauseTime = Date.now() - this.pauseTime;
    this.startingTime += elapsedPauseTime;

    this.update();
    this.intervalId = setInterval(this.update.bind(this), 1000);

    // Change puse button state
    this.pauseBtn.dataset.action = Timer.ActionType.Pause;
    this.pauseBtn.textContent = 'Пауза';
  }

  start() {
    this.startingTime = Date.now();
    this.update();
    this.intervalId = setInterval(this.update.bind(this), 1000);

    this.startBtn.disabled = true;
    this.stopBtn.disabled = false;
    this.pauseBtn.disabled = false;
  }

  update() {
    const elapsedTime = Date.now() - this.startingTime;

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

    this.outputElem.innerHTML = `${hoursStr}:${minutesStr}:${secondsStr}`;
  }

  stop() {
    clearInterval(this.intervalId);

    this.startBtn.disabled = false;
    this.stopBtn.disabled = true;
    this.pauseBtn.disabled = true;

    // Change puse button state
    this.pauseBtn.dataset.action = Timer.ActionType.Pause;
    this.pauseBtn.textContent = 'Пауза';
  }
}
