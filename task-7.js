import users from './users.js';

const calculateTotalBalance = (users) => {
  return users.reduce((prev, user) => prev + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
