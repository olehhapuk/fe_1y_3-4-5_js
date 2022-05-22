'use strict';

const arrA = [];
arrA[0] = 'Index 0';

const arrB = arrA;
arrB[1] = 'Index 1';

console.log(arrA === arrB);
console.log(arrA, arrB);
