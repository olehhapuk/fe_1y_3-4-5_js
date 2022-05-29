'use strict';

// Declaration
// function add(a = 2, b = 2) {
//   console.log(a, b);
//   console.log(a + b);
//   console.log('--------');
// }

// add(1, 4);
// add(7, 3);
// add(10, 5);
// add(undefined, 10);

// Arguments
// function sum() {
//   let total = 0;

//   // Перетворюємо псевдо масив в стандартний масив
//   const argsArray = Array.from(arguments);
//   console.log(argsArray.slice(0, 3));

//   for (const arg of arguments) {
//     total += arg;
//   }

//   console.log(total);
// }

// sum(1, 3, 5, 5);

// Rest operator
// function sum(a, ...args) {
//   let total = 0;

//   console.log(a);
//   console.log(args);
//   console.log(args.slice(0, 3));

//   for (const arg of args) {
//     total += arg;
//   }

//   console.log(total);
// }

// sum('Adding', 1, 3, 5, 5);

// Return
// function greet(username) {
//   // Greetings, {username}!
//   return 'Greetings, ' + username + '!';
//   // console.log(1); Не спрацює після return
// }

// const greet1 = greet('Ростислав');
// const greet2 = greet('Остап');
// const greet3 = greet('Артем');

// console.log(greet1);
// console.log(greet2);
// console.log(greet3);
// console.log(greet('Іван'));

/**
 * login
 * 1. Отримати дані від користувача через prompt
 * 2. Зберігаємо в змінні username, pass
 * 3. Перевірити чи дані користувача збігаються з даними адміна
 *   - Якщо збігаються: Вертаємо повідомлення "Вітаємо адмін"
 *   - В іншому випадку: Вертаємо повідомлення "Ви не адмін"
 */

const ADMIN_USERNAME = 'ADMIN';
const ADMIN_PASS = '1234';

const usernameInput = prompt('Введіть свій username');
const passInput = prompt('Введіть свій пароль');

alert(login(usernameInput, passInput));

function login(username, pass) {
  if (username === null || pass === null) {
    return;
  }

  if (username === ADMIN_USERNAME && pass === ADMIN_PASS) {
    return 'Вітаємо адмін';
  } else {
    return 'Ви не адмін';
  }
}
