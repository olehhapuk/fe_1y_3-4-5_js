'use strict';

// const message = 'Welcome to my website!';
// console.log(message);

// alert(message);

/**
 * Скасувати = false
 * Ок = true
 */
// const result = confirm(message);
// console.log(result);

/**
 * Скасувати = null
 * Ок = Ввід від користувача
 */
const a = prompt('First number');
const b = prompt('Second number');

/**
 * Int = 1 - ціле число
 * Float = 1.05 - дробове число
 */
const aNumber = parseInt(a);
const bNumber = parseInt(b);

const result = aNumber + bNumber;
console.log(isNaN(result));
