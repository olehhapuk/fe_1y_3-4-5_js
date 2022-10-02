// Вивести інформацію про кожного друга в консоль forEach

// friends.forEach((friend) => {
//   console.log(friend);
// });

// Змінити значення online для Luanne Ivo на false map

// const updatedFriends = friends.map((friend) => {
//   if (friend.name === 'Luanne Ivo') {
//     return {
//       ...friend,
//       online: false,
//     };
//   }

//   return friend;
// });
// console.table(updatedFriends);

// Змінити об'єкт друзів на { name } map

// const updatedFriends = friends.map((friend) => {
//   return {
//     name: friend.name,
//   };
// });

// console.log(updatedFriends);

// Створити новий масив без Rheie Irmentrud filter

// const filteredFriends = friends.filter(
//   (friend) => friend.name !== 'Rheie Irmentrud'
// );

// const namesToDelete = ['Rheie Irmentrud', 'Luanne Ivo'];

// const filteredFriends = friends.filter((friend) => {
//   if (namesToDelete.includes(friend.name)) {
//     return false;
//   }

//   return true;
// });

// console.table(filteredFriends);

// Посортувати друзів по віку за зростанням sort

// const sortedFriends = friends.sort((a, b) => {
//   const ageA = a.age;
//   const ageB = b.age;

//   return ageA - ageB;
// });

// console.table(sortedFriends);

// Перевірити чи хтось з друзів є онлайн every|some

// const someOnline = friends.some((friend) => friend.online);
// console.log(someOnline);

// Порахувати кількість друзів які є онлайн reduce

// const onlineFriends = friends.reduce((prev, friend) => {
//   if (friend.online) {
//     return prev + 1;
//   }

//   return prev;
// }, 0);
// console.log(onlineFriends);

// 0: prev = 0; -> 0;
// 1: prev = 0; -> 1;
// 2: prev = 1; -> 2;
// result: 2

const users = [
  {
    name: 'Mirche Lycus',
    age: 25,
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    online: false,
    friends: ['Kayley Leigh', 'Selin Cornish', 'Dafydd May'],
  },
  {
    name: 'Rheie Irmentrud',
    age: 21,
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    online: true,
    friends: ['Kevin Edwards', 'Musab Mcleod'],
  },
  {
    name: 'Luanne Ivo',
    age: 23,
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    online: true,
    friends: [
      'Diesel Levy',
      'Kayley Leigh',
      'Kevin Edwards',
      'Anabia Delacruz',
      'Brendan Henderson',
    ],
  },
];

// Отримати масив користувачів які є онлайн filter

// const onlineFriends = users.filter((user) => user.online);
// console.table(onlineFriends);

// Отримати користувача по імені Rheie Irmentrud find

// const user = users.find((user) => user.name === 'Rheie Irmentrud');
// console.log(user);

// Посортувати користувачів по кількості друзів sort

// console.table(users);
// const sortedUsers = users
//   .slice()
//   .sort((userA, userB) => userA.friends.length - userB.friends.length);
// console.table(sortedUsers);
// console.table(users);

// Додати властивість friendsCount до кожного елемента users

// const friendsCount = users.map((user) => {
//   return {
//     ...user,
//     friendsCount: user.friends.length,
//   };
// });
// console.table(friendsCount);

// Отримати користувачів у яких є друг Kayley Leigh filter

// const friend = users.filter((user) => user.friends.includes('Kayley Leigh'));
// console.log(friend);

// const sumAge = users.reduce((prev, user) => {
//   return prev + user.age;
// }, 0);

// 0: prev = 0; return 25
// 1: prev = 25; return 46
// 2: prev = 46; return 69
// Result = 69

// function User({ username }) {
//   this.username = username;
// }

// User.prototype.login = function ({ username }) {
//   if (username === this.username) {
//     console.log('Login success');
//   } else {
//     console.log('Wrong data');
//   }
// };

// const john = new User({ username: 'john_doe' });
// john.login({ username: 'doe_john' });
