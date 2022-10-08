import users from './users.js';

const getNamesSortedByFriendsCount = (users) => {
  const sortedUsers = users.sort((userA, userB) => {
    // if (userA.friends.length === userB.friends.length) {
    //   return 0;
    // }

    // if (userA.friends.length > userB.friends.length) {
    //   return 1;
    // }

    // if (userA.friends.length < userB.friends.length) {
    //   return -1;
    // }

    return userA.friends.length - userB.friends.length;
  });

  const userNames = sortedUsers.map((user) => user.name);

  return userNames;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
