setTimeout(() => {
  console.log('Timeout');
}, 2 * 1000);

const intervalID = setInterval(() => {
  console.log('Interval');
}, 1 * 1000);

setTimeout(() => {
  clearInterval(intervalID);
  console.log('Stopped');
}, 5 * 1000);
