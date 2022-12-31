const date = new Date();
// console.log(
//   `День: ${date.getDate()}, Місяць: ${
//     date.getMonth() + 1
//   }, Рік: ${date.getFullYear()}, Година: ${date.getHours()}`
// );

// date.setHours(15);
// console.log(`Година: ${date.getHours()}`);
// console.log(date);

const months = ['Січень', 'Лютий'];

date.setDate(10);
date.setMonth(1);

const monthIndex = date.getMonth();
console.log(monthIndex);
console.log(months[monthIndex]);
console.log(date);
console.log(date.getTime());

const date1 = new Date(1644492879951);
console.log(date1);
console.log(Date.now());
