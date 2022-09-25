// const numbers = [3, 9, 15];

// let sum = 0;
// for (const num of numbers) {
//   sum += num;
// }

// const sum = numbers.reduce((prev, num, i) => {
//   console.group(i);
//   console.log('Prev:', prev);
//   console.log('Num:', num);
//   console.groupEnd();

//   return prev + num;
// }, 0);

// console.log(sum);

const movies1 = [
  {
    id: '1',
    title: 'Movie 1',
    genre: 'Action',
  },
  {
    id: '2',
    title: 'Movie 2',
    genre: 'Adventure',
  },
  {
    id: '3',
    title: 'Movie 3',
    genre: 'Action',
  },
  {
    id: '4',
    title: 'Movie 4',
    genre: 'Comedy',
  },
  {
    id: '5',
    title: 'Movie 5',
    genre: 'Adventure',
  },
  {
    id: '6',
    title: 'Movie 6',
    genre: 'Adventure',
  },
];

const movies2 = [
  {
    id: '1',
    title: 'Movie 1',
    genre: 'Action',
  },
  {
    id: '2',
    title: 'Movie 2',
    genre: 'Adventure',
  },
  {
    id: '3',
    title: 'Movie 3',
    genre: 'Action',
  },
  {
    id: '4',
    title: 'Movie 4',
    genre: 'Comedy',
  },
  {
    id: '5',
    title: 'Movie 5',
    genre: 'Adventure',
  },
  {
    id: '6',
    title: 'Movie 6',
    genre: 'Adventure',
  },
];

const getCategorizedMovies = (prev, movie) => {
  const { genre } = movie;

  if (!prev.hasOwnProperty(genre)) {
    prev[genre] = [];
  }

  prev[genre].push(movie);

  return prev;
};

const categorizedMovies1 = movies1.reduce(getCategorizedMovies, {});
const categorizedMovies2 = movies2.reduce(getCategorizedMovies, {});

console.log(categorizedMovies1);
