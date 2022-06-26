// const a = function () {
//   console.log('a');
// };

// const c = function () {
//   console.log('c');
// };

// function b(callback) {
//   callback();
// }

// b(a);
// b(c);

// const printMessage = function (message) {
//   console.log(message);
// };

// const printPrettyMessage = function (message) {
//   console.log('-----');
//   console.log(message);
//   console.log('-----');
// };

// const log = function (name, callback) {
//   callback(name);
// };

// log('John', printMessage);
// log('Doe', printPrettyMessage);

// function repeatLog(n, callback) {
//   for (let i = 0; i < n; i++) {
//     callback(i);
//   }
// }

// function logI(i) {
//   console.log(i);
// }

// // repeatLog(12, logI);
// const oddNumers = [];

// repeatLog(12, (i) => {
//   const num = i + 1;
//   if (num % 2 === 0) {
//     oddNumers.push(num);
//   }
// });

// console.log(oddNumers);

// const fn1 = () => {
//   console.log('Hello, World!');
// };
// const fn2 = () => {
//   console.log('Goodbye, World!');
// };

// let a = fn1;
// a = fn2;

// console.log(a);
// a();

// function hof1(callback) {
//   callback();
// }

// function hof2() {
//   return () => {
//     console.log('a');
//   };
// }

// function hof3(callback) {
//   return () => {
//     console.log('a');
//     callback();
//   };
// }

// function makeLog() {
//   return () => {
//     console.log('a');
//   };
// }

// const logger = makeLog();
// // console.log(logger);
// logger();

// function makeDish(cookName, dishName) {
//   return `${cookName} готує ${dishName}`;
// }

// const fish = makeDish('Остап', 'рибу');
// const noodles = makeDish('Остап', 'макарони');
// const pelmeni = makeDish('Остап', 'пельмені');
// console.log(fish, noodles, pelmeni);

function makeCheff(cookName) {
  return (dishName) => {
    return `${cookName} готує ${dishName}`;
  };
}

const cheffOstap = makeCheff('Остап');

const fish = cheffOstap('рибу');
const noodles = cheffOstap('макарони');
const pelmeni = cheffOstap('пельмені');
console.log(fish, noodles, pelmeni);
