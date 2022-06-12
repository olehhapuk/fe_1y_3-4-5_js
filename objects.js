// const obj = {
//   firstKey: 'my first key',
//   '@key': 5,
//   logHello() {
//     console.log('Hello');
//   },
//   arrowFn: () => {
//     console.log("I'm arrow");
//   },
// };

// console.log(obj.firstKey);
// console.log(obj.username);
// obj.logHello();
// obj.arrowFn();

// obj.firstKey = 'updated';
// obj.username = 'john';
// obj['@key'] = 15;

// obj.logHello = function () {
//   console.log('Goodbye');
// };

// obj.logHello();

// console.log(obj['@key']);
// console.log(obj['firstKey']);
// console.log(obj.username);

// delete obj['@key'];
// console.log(obj['@key']);

// console.log(obj);

// const username = 'john_doe';
// const password = '12345';

// const user = {
//   username,
//   password,
//   type: 'admin',
//   profile: {
//     displayName: 'John Doe',
//   },
//   likedPosts: ['Post 1', 'Post 2'],
// };

// console.log(user);
// console.log(user.profile.displayName);
// console.log(user.likedPosts[0]);

// const posts = [
//   {
//     title: 'Post 1',
//     text: 'Lorem ipsum dolores',
//   },
//   {
//     title: 'Post 2',
//     text: 'Lorem ipsum',
//   },
// ];

// console.log(posts);
// console.log(posts[1].title);

const student = {
  name: 'John Doe',
  present: true,
  checkPresence() {
    if (this.present) {
      console.log('Учень присутній');
    } else {
      console.log('Учень не присутній');
    }
  },
  changePresent(newPresent) {
    this.present = newPresent;
    this.checkPresence();
  },
  key: 'test',
};

for (const key in student) {
  console.log(key, student[key]);
  // console.log(typeof key);
}

console.log('-----');

for (const key of Object.keys(student)) {
  console.log(key, student[key]);
}

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student)[0][1]);

// const key = 'pres' + 'ent';

// // Computed property
// console.log(student[key]);
// console.log(student.key);
// // console.log(student.key.innerKey); -> Uncaught TypeError
// student.checkPresence();
// student.changePresent(false);
// student.changePresent(true);
