import './styles/index.scss';
import { logCallback, logPromise } from './scripts/delayedLog';
import { makePromise } from './scripts/promiseAll';

// logCallback(
//   () => {
//     console.log('Log callback success');
//   },
//   () => {
//     console.log('Log callback error');
//   }
// );

// console.log('Loading start');

// logPromise()
//   .then((data) => {
//     console.log('Log promise success:', data);
//   })
//   .catch((error) => {
//     console.log('Promise error:', error);
//   })
//   .finally(() => console.log('Loading end'));

// fetch('url')
//   .then((res) => res.text())
//   .then((data) => console.log(data));

const promise1 = makePromise('Promise 1');
const promise2 = makePromise('Promise 2');

Promise.all([promise1, promise2]).then(([promise1Data, promise2Data]) => {
  console.log('Promise 1 data:', promise1Data);
  console.log('Promise 2 data:', promise2Data);
});
