// Практична 4
// Завдання 1

// const num = +prompt('Введіть число');
// if (num >= 55 && num <= 99) {
//   console.log('Число потрапляє у діапазон');
// } else {
//   console.log('Число не потрапляє у діапазон');
// }

// Завдання 2
// const num = +prompt('Введіть свій вік');
// if (num >= 0 && num <= 16) {
//   console.log('Ви дитина');
// } else if (num >= 17 && num <= 60) {
//   console.log('Ви дорослий');
// } else if (num >= 61 && num <= 100) {
//   console.log('Ви пенсіонер');
// }

// Як отримати кількість букв
// const myName = 'Oleh';
// console.log(myName.length);

// Завдання 4
// const num = Math.round(Math.random() * (5 - 1)) + 1;
// if (num % 2 === 0) {
//   console.log('Це число парне');
// } else {
//   console.log('Це число непарне');
// }

// if (num === 1) {
//   console.log('Це 1');
// } else if (num === 2) {
//   console.log('Це 2');
// }

// Завдання 5
// const lang = prompt('Введіть мову');
// switch (lang) {
//   case 'ua':
//     console.log('Січень');
//     break;
//   case 'fr':
//     console.log('Janvier');
//     break;
//   default:
//     alert('Непідтримувана мова');
//     break;
// }

// Практична 5
// Завдання 1
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let num1 = 1;
// const num2 = num1 + 1;
// console.log(num1, num2);

// Завдання 2
// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i + ' Парне число');
//   } else {
//     console.log(i + ' Непарне число');
//   }
// }

// Завдання 3
// let num = 20;
// while (num <= 28) {
//   console.log(num);
//   num++;
// }

// Завдання 4
// Варіант 1
// let hero = prompt("Введіть ім'я героя");
// while (hero.length < 6) {
//   console.log(hero);
//   hero = prompt("Введіть ім'я героя");
// }

// console.log('Кількість букв більше 6');

// Варіант 2

// let hero = '';
// do {
//   hero = prompt("Введіть ім'я героя");
//   if (hero.length >= 6) {
//     break;
//   }
//   console.log(hero);
// } while (hero.length < 6);

// console.log('Кількість букв більше 6');
