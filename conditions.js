'use strict';

// const isLoggedIn = true;

// if (isLoggedIn === true) {
//   console.log('Вітаю користувач!');
// } else {
//   console.log('Ви не пройшли');
// }

// Login
// const username = prompt("Введіть ім'я користувача");
// const adminUsername = 'ADMIN';

// if (username === adminUsername) {
//   alert('Ви ввійшли!');
// } else {
//   alert('Ви не ввійшли!');
// }

// == vs ===
// console.log('1 === 1', 1 === 1);
// console.log("1 === '1'", 1 === '1');
// console.log("1 == '1'", 1 == '1');

// -----------
// const isLoggedIn = true;

// if (isLoggedIn) {
//   console.log('Вітаю користувач!');
// } else {
//   console.log('Ви не пройшли');
// }

// Else if
const username = 'adMin';

// if (username.toUpperCase() === 'ADMIN') {
//   alert('Вітаю Адмін!');
// } else if (username) {
//   alert(username);
// } else {
//   alert('Такого користувача не знайдено');
// }

if (username === 'ADMIN' || username === 'admin') {
  alert('Вітаю Адмін!');
} else if (username) {
  alert(username);
} else {
  alert('Такого користувача не знайдено');
}

// if (username === 'ADMIN') {
//   alert('Вітаю Адмін!');
// }

// if (username === null) {
//   alert('Такого користувача не знайдено');
// }
