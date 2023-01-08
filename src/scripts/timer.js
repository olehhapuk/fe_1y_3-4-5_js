import Inputmask from 'inputmask';

export class Timer {
  static ActionType = {
    Pause: 'pause',
    Resume: 'resume',
  };

  constructor(
    startBtnSelector,
    stopBtnSelector,
    pauseBtnSelector,
    outputSelector,
    timerNotificationSelector
  ) {
    this.startBtn = document.querySelector(startBtnSelector);
    this.stopBtn = document.querySelector(stopBtnSelector);
    this.pauseBtn = document.querySelector(pauseBtnSelector);
    this.outputElem = document.querySelector(outputSelector);
    this.timerNotificationInput = document.querySelector(
      timerNotificationSelector
    );

    const inputMask = new Inputmask({
      regex: '([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])',
    });
    inputMask.mask(this.timerNotificationInput);

    this.startBtn.addEventListener('click', this.start.bind(this));
    this.stopBtn.addEventListener('click', this.stop.bind(this));
    this.pauseBtn.addEventListener('click', this.togglePause.bind(this));

    this.startingTime = null;
    this.intervalId = null;
    this.pauseTime = null;
    this.notificationTime = null;
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

  // 00:00:00 -> 00, 00, 00
  calculateNotificationTime() {
    // const obj = {
    //   hours: 15,
    //   minutes: 30,
    //   seconds: 25,
    // };
    // const { seconds: otherSeconds, hours, minutes } = obj;

    const notificationInputValue = this.timerNotificationInput.value;
    // const hoursStr = notificationInputValue.split(':')[0];
    // const minutesStr = notificationInputValue.split(':')[1];
    // const secondsStr = notificationInputValue.split(':')[2];
    const [hoursStr, minutesStr, secondsStr] =
      notificationInputValue.split(':');

    const hours = +hoursStr;
    const minutes = Number(minutesStr);
    const seconds = parseFloat(secondsStr);

    this.notificationTime =
      seconds * 1000 + minutes * 60 * 1000 + hours * 60 * 60 * 1000;
  }

  start() {
    this.calculateNotificationTime();
    this.startingTime = Date.now();
    this.update();
    this.intervalId = setInterval(this.update.bind(this), 1000);

    this.startBtn.disabled = true;
    this.stopBtn.disabled = false;
    this.pauseBtn.disabled = false;
  }

  update() {
    const elapsedTime = Date.now() - this.startingTime;

    // 1005 / 1000 = 1.005
    // Math.floor(1.005) = 1

    const roundedElapsedTime = Math.floor(elapsedTime / 1000);
    console.log(this.notificationTime, roundedElapsedTime * 1000);

    if (this.notificationTime / 1000 === roundedElapsedTime) {
      console.log('Timer event');
    }

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
