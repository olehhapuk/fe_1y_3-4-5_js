import users from './users.js';

const getUsersWithGender = (users, gender) => {
  // return users.reduce((acc, user) => {
  //   if (user.gender === gender) {
  //     acc.push(user.name);
  //   }
  //   return acc;
  // }, []);

  // const filteredUsers = users.filter((user) => user.gender === gender);
  // const userNames = filteredUsers.map((user) => user.name);

  // return userNames;

  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

console.table(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
