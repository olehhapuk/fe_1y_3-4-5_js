'use strict';

// Task 1
// const languages = ['c', 'c++', 'c#', 'javascript'];
// const input = prompt('Введіть мову');

// if (languages.includes(input)) {
//   alert('Така мова є');
// } else {
//   alert('Такої мови немає');
// }

// Task 2
// create, delete, view, edit
// const actions = ['create', 'delete', 'view', 'edit'];
// const input = prompt('Що ви хочете зробити?').toLowerCase().trim();

// if (actions.includes(input)) {
//   alert('Така дія є');
// } else {
//   alert('Такої дії немає');
// }

// Task 3 - Copy array
// Variant 1
// const arrA = ['a', 'b', 'c'];
// const arrB = [].concat(arrA);

// console.log(arrA === arrB);
// console.log(arrA);
// console.log(arrB);

// Variant 2
// const arrA = ['a', 'b', 'c'];
// const arrB = arrA.slice(0);

// console.log(arrA === arrB);
// console.log(arrA);
// console.log(arrB);

// Variant 3
// const arrA = ['a', 'b', 'c'];
// const arrB = [...arrA];

// console.log(arrA === arrB);
// console.log(arrA);
// console.log(arrB);

// Task 4
// const arr = ['first', 'second', 'third'];
// console.log(arr[0]);
// // console.log([arr[0], arr[1]]);
// console.log(arr.slice(0, 2));

// Task 5
// const arr = ['first', 'second', 'third'];
// console.log(arr[arr.length - 1]);
// // console.log([arr[arr.length - 1], arr[arr.length - 2]]);
// console.log(arr.slice(-2));
// console.log(arr.slice(-2).reverse()); // Reverse array

// Task 6
// phone, bowl, plate, table
// const items = ['phone', 'bowl', 'plate', 'table'];
// const str = items.join(', ');
// console.log(str);
// console.log(str.split(', '));

// Task 7
const str = 'AnYHuGvbd';
const arr = [];
// console.log(str.length);

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  const isUppercase = char.toUpperCase() === char;
  console.log(char, isUppercase);

  if (isUppercase) {
    arr.push(char.toLowerCase());
  } else {
    arr.push(char.toUpperCase());
  }
}

const str2 = arr.join('');
console.log(str, str2);
