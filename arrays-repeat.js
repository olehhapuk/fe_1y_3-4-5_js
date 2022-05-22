'use strict';

const numbers = [1, 'test', true];
// console.log(numbers.length);

for (const number of numbers) {
  console.log(number);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
