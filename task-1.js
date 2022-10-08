import users from './users.js';

const getUserNames = (users) => {
  // const gotUsernames = [];
  // users.forEach((user) => {
  //   gotUsernames.push(user.name);
  // });

  // return gotUsernames;

  return users.map((user) => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
