// Array spreading
// const numbers = [9, 3, 5];
// const min = Math.min(...numbers);
// console.log(min);

// const numbers1 = [9, 3, 5];
// const numbers2 = [19, ...numbers1, 11];
// const numbers3 = [...numbers1, ...numbers2];

// console.log(numbers1 === numbers2);
// console.log(numbers1);
// console.log(numbers2);
// console.log(numbers3);

// Object spreading
// const user1 = {
//   username: 'user-1',
//   password: 'pass1',
//   owner: true,
// };
// const user2 = {
//   username: 'user-2',
//   password: 'pass2',
// };

// const finalUser = {
//   ...user1,
//   ...user2,
//   firstName: 'John',
// };

// console.log(finalUser);

// Rest
function logSum(name, ...grades) {
  console.log(grades);

  let total = 0;
  for (const grade of grades) {
    total += grade;
  }
  console.log(name, total);
}

logSum('Walter', 9, 11, 12);
