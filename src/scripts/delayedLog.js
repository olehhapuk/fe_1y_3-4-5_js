export function logCallback(callbackSuccess, callbackError, delay = 1000) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      callbackSuccess();
    } else {
      callbackError();
    }
  }, delay);
}

export function logPromise(delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Success');
      } else {
        reject('Random error');
      }
    }, delay);
  });
}
