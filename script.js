const a = 10;
// console.log(a);

let b;
// console.log(b);

b = 15;
// console.log(b);

const camelCase = 'camelCase';
const ageLength = 5;
const vikDovzhuna = 12;
const вікДовжина = 15;
// const num = 1;
// console.log(typeof num);

// Число - number
const num = 99;
// Текст - string
const str = 'Text';
// Булеве значення - boolean
const bool1 = true;
const bool2 = false;
// Невизначене - undefined
const undef = undefined;
// Пусте значення - null
const nul = null;
// Не число - NaN
const nan = NaN;
// Об'єкт - object
const object = {};
// Масив - array
const array = [];

// const input1 = +prompt('Введіть число 1');
// console.log(typeof input1, input1);

// const input2 = parseInt(prompt('Введіть число 2'));
// console.log(typeof input2, input2);

// const input3 = parseFloat(prompt('Введіть число 3'));
// console.log(typeof input3, input3);

// const input4 = Number(prompt('Введіть число 4'));
// console.log(typeof input4, input4);

/**
 * Математичні оператори: + - * / ** %
 * Оператори порівнянна: == === != !== > < >= <=
 * Логічні оператори: && (і), || (або)
 */

// console.log("5 == '5'", 5 == '5'); // true
// console.log("5 === '5'", 5 === '5'); // false

// console.log('5 !== 5', 5 !== 5); // false

// console.log('5 > 1', 5 > 1); // true
// console.log('5 > 5', 5 > 5); // false
// console.log('5 >= 5', 5 >= 5); // true
// console.log('5 >= 1', 5 >= 1); // true

// console.log('5 < 1', 5 < 1); // false

// console.log(1 < 2 && 1 < 3); // Якщо 1 < 2 і 1 < 3
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(false && false); // false

// console.log(1 < 2 || 1 < 3); // Якщо 1 < 2 або 1 < 3 - true
// console.log(1 > 2 || 1 < 3); // Якщо 1 > 2 або 1 < 3 - true
// console.log(1 > 2 || 1 > 3); // Якщо 1 > 2 або 1 > 3 - false

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(false || false); // false

// 0 NaN null undefined '' == false

// console.log(5 && 0); // 0
// console.log(0 && 5); // 0
// console.log(1 && 5); // 5
// console.log(0 && 5 && ''); // 0
// console.log(1 && 5 && ''); // ''
// console.log(1 && 5 && 9); // 9

console.log(0 || 5); // 5
console.log(0 || ''); // ''
console.log(1 || ''); // 1
console.log('' || 1 || null); // 1
console.log('' || 0 || null); // null

const username = 'oleh';
const finalUsername = username || 'username_' + Math.random();
console.log(finalUsername);

const index = 'ua';
switch (index) {
  case 'ua':
    console.log('Січень');
    break;

  case 2:
    console.log('b');
    break;

  case 3:
    console.log('c');
    break;

  default:
    console.log('Непідтримуване значення');
    break;
}
