'use strict';

const username = prompt('Введіть свій username');

const adminUsername = 'Admin';

// if (username === adminUsername) {
//   alert('Вітаємо Адмін! Ви маєте доступ до всього сайту!');
// } else {
//   alert(`Вітаємо, ${username}`);
// }

const message =
  username === adminUsername
    ? 'Вітаємо Адмін! Ви маєте доступ до всього сайту!'
    : `Вітаємо, ${username}`;

const type = username === adminUsername ? 'admin' : 'user';
alert(message);
console.log(type);
