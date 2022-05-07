'use strict';

const username = prompt('Введіть свій username');
const password = prompt('Введіть свій пароль');

const adminUsername = 'admin';
const adminPassword = 'admin_password';

if (username === adminUsername && password === adminPassword) {
  alert('Вітаємо Адмін!');
} else {
  alert('Невірні дані');
}

console.log(1 == '1'); // true - нестроге порівняння
console.log(1 === '1'); // false - строге порівняння
