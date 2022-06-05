// Task 1
// Function declaration
// sayHello => console.log('Hello, {name}');
// function sayHello() {
//   console.log('Hello, Kateryna');
// }

// sayHello();

// Task 2
// Function expression
// const sayHello = function () {
//   console.log('Hello, Artem');
// };

// sayHello();

// Task 3
// Arrow function
// const sayHello = () => console.log('Hello, Polina and Kateryna');
// sayHello();

// Task 4
// sayHello(name) -> console.log('Hello, {name}');
// const sayHello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// sayHello('Maxim');
// sayHello('Example');

// Task 5
// calculateLength(str) -> кількість символів в str
// const calculateLength1 = (str) => {
//   return str.length;
// };
// console.log(calculateLength1('Vlad'));

// const calculateLength2 = (str) => str.length;
// console.log(calculateLength2('Vlad'));

// Task 6
// countWords(str) -> кількість слів
// const countWords = (str) => {
//   const arr = str.split(' ');
//   console.log(arr);
//   return arr.length;
// };

// console.log(countWords('Hello World'));

// Task 7
// checkInRange(str) -> boolean
// const checkInRange = (str) => {
//   if (str.length >= 6 && str.length <= 16) {
//     return true;
//   }

//   return false;
// };

// const checkInRange = (str) => str.length >= 6 && str.length <= 16;

// console.log(checkInRange('Danylo'));
// console.log(checkInRange('Vlad'));

// Task 8
// capitalize(word) -> слово з першою великою буквою
// const capitalize = (word) => {
//   const firstLetter = word[0];
//   const BIGfirstLetter = firstLetter.toUpperCase();
//   const capitalizedWordArr = word.split('');
//   capitalizedWordArr[0] = BIGfirstLetter;

//   return capitalizedWordArr.join('');
// };

// const capitalize = (word) =>
//   word[0].toUpperCase() + word.slice(-word.length + 1);

// const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

// console.log(capitalize('polina'));

// Task 9
// strictCapitalize(word) -> слово з першою великою буквою
// const strictCapitalize = (word) => {
//   const firstBigLetter = word[0].toUpperCase();
//   const otherLettersArray = word.slice(1).split('');
//   for (let i = 0; i < otherLettersArray.length; i++) {
//     otherLettersArray[i] = otherLettersArray[i].toLowerCase();
//   }

//   const finalWord = firstBigLetter + otherLettersArray.join('');
//   return finalWord;
// };

// const strictCapitalize = (word) =>
//   word[0].toUpperCase() + word.slice(1).toLowerCase();

// console.log(strictCapitalize('FEjsY'));

// Task 10
// Якщо рядок включає заборонене слово то вертаємо false, в іншому випадку true
// checkWord(str, word) -> boolean
// const checkWord = (str, word) => {
//   if (str.includes(word)) {
//     return false;
//   }

//   return true;
// };

// const checkWord = (str, word) =>
//   !str.toLowerCase().includes(word.toLowerCase());

// console.log(checkWord("I'm spAM", 'SpAm'));

// Task 11
// checkWords(str, words) -> boolean
// const checkWords = (str, words) => {
//   for (let i = 0; i < words.length; i++) {
//     if (str.toLowerCase().includes(words[i].toLowerCase())) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(checkWords("I'm user and flood", ['spam', 'flOod']));

// const arr = [1, 1, 1, 4];

// function fn() {
//   const b = 'a';
// }

// console.log(fn());

// const arr1 = ['Artem', 'Vlad', 'Kateryna', 'Maxim'];

// console.log(arr1.splice(1, 2, 'Taras', 'Danylo'));
// console.log(arr1);
