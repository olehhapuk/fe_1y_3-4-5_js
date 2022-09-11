// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   login(username) {
//     return this.username === username;
//   }
// }

function User(username) {
  this.username = username;
}

User.prototype.login = function (username) {
  return this.username === username;
};

const john = new User('John');
