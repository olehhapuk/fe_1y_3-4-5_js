import './styles/index.scss';

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((posts) => {
//     console.log(posts);
//   });

const user1Promise = fetch('https://jsonplaceholder.typicode.com/posts/1').then(
  (response) => response.json()
);

const user2Promise = fetch('https://jsonplaceholder.typicode.com/posts/2').then(
  (response) => response.json()
);

Promise.all([user1Promise, user2Promise]).then(([user1, user2]) => {
  console.log(user1.title + user2.title);
});
