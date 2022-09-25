// const numbers = [3, 1, 9, 2, 7];

// const names = ['Poly', 'Mango', 'Ajax'];

// console.log(numbers.sort().reverse());
// console.log(names.sort());

const movies = [
  {
    id: '1',
    title: 'Movie 1',
    genre: 'Action',
    views: 350,
  },
  {
    id: '2',
    title: 'Movie 2',
    genre: 'Adventure',
    views: 50,
  },
  {
    id: '3',
    title: 'Movie 3',
    genre: 'Action',
    views: 1000,
  },
  {
    id: '4',
    title: 'Movie 4',
    genre: 'Comedy',
    views: 1050,
  },
  {
    id: '5',
    title: 'Movie 5',
    genre: 'Adventure',
    views: 39,
  },
  {
    id: '6',
    title: 'Movie 6',
    genre: 'Adventure',
    views: 1,
  },
];

// .sort((a, b) => a.genre.localeCompare(b.genre));

const sortedMovies = movies
  .filter((movie) => movie.views >= 50)
  .sort((a, b) => a.views - b.views)
  .map((movie) => {
    return {
      title: movie.title,
      genre: movie.genre,
      views: movie.views,
    };
  })
  .reverse();

console.table(sortedMovies);
