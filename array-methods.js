// const message = 'Hello from JavaScript!';
// const messageWords = message.split(' ');
// console.log(messageWords.length);

// const data = 'john_doe, user_developer, admin';
// console.log(data.split(', '));

// const fileType = prompt('File type'); // image/png
// const words = fileType.split('/');
// console.log(words[1]);

// const classes = ['user__item', 'user__item_active'];
// const className = classes.join(' ');
// console.log(className);

// const people = [
//   'artem',
//   'vlad',
//   'kateryna',
//   'maxim',
//   'ivan',
//   'danylo1',
//   'danylo2',
//   'polina',
//   'rostyslav',
// ];
// console.log(people.indexOf('taras'));
// console.log(people.includes('taras'));

// console.log(people.includes('polina'));

// const redFruits = ['apple', 'strawberry'];
// const userFruit = prompt('Enter fruit').toLowerCase().trim();

// if (redFruits.includes(userFruit)) {
//   console.log('Це червоний фрукт');
// } else {
//   console.log('Це не червоний фрукт');
// }

// const message = 'ivan';
// const messageArray = message.split('');
// messageArray[0] = messageArray[0].toUpperCase();
// const finalMessage = messageArray.join('');
// console.log(finalMessage);

// const redFruits = ['apple', 'strawberry'];

// // Додає елемент в кінець
// // const newLength = redFruits.push('cherry');
// // redFruits[redFruits.length] = 'cherry';

// redFruits.push('tomato');
// // Забирає елемент з кінця
// const deletedItem = redFruits.pop();

// // Забирає елемент з початку
// redFruits.shift();
// // Додає елемент в початок
// redFruits.unshift('merry');

// console.log(redFruits);

const people = [
  'artem',
  'vlad',
  'kateryna',
  'maxim',
  'ivan',
  'danylo1',
  'danylo2',
  'polina',
  'rostyslav',
];
// const arrA = people.slice(0, 3);
// const arrB = people.slice(5, 9);
// // console.log(arrB);
// arrA.push(...arrB); // spread
// console.log(arrA);

console.log(people, people.slice());
console.log(people.slice() === people);
console.log(people.slice(-3));
