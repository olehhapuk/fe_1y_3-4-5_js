'use strict';

// let counter1 = 0;
// while (counter1 < 15) {
//   console.log('counter1', counter1);
//   counter1++;
// }

// let counter2 = 0;
// do {
//   console.log('counter2', counter2);
//   counter2++;
// } while (counter2 < 15);

// for (let counter = 0; counter < 15; counter++) {
//   console.log('for', counter);
// }

// let counter = 0;
// while (counter < 15) {
//   console.log('for-while', counter);
//   counter++;
// }

// i = index
// for (let i = 0; i < 15; i++) {
//   if (i % 2 === 0) {
//     console.log('число парне', i);
//   } else {
//     console.log('число непарне', i);
//   }
// }

// for (let i = 0; i < 15; i++) {
//   console.log(i + 1);
// }

// let num1 = 1;
// const num2 = num1++; // 1

// let num1 = 1;
// const num3 = (num1 += 1); // 2

// let num1 = 1;
// const num4 = ++num1; // 2

// console.log('num1', num1);
// console.log('num2', num2);
// console.log('num3', num3);
// console.log('num4', num4);

for (let i = 0; i < 15; i++) {
  if (i > 10) {
    break;
  }

  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}
