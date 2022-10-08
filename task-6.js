import users from './users.js';

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};

console.table(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
