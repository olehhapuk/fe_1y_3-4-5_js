const user = {
  username: 'dev',
};

// const admin = Object.create(user);
// admin.type = 'ADMIN';

// console.log(Object.getPrototypeOf(admin));
// console.log(admin.__proto__);

const admin = {
  type: 'ADMIN',
};

Object.setPrototypeOf(admin, user);
console.log(admin);

// console.log(admin.type);
// console.log(admin.username);
// console.log(admin.hasOwnProperty('username'));

// Object.keys(admin);
// for (const key in admin) {
//   if (admin.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
