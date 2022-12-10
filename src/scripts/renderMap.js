import movieTemplate from '../partials/movie.hbs';

export function renderMap(movies) {
  const movieListElem = document.querySelector('.movie-list');

  const html = movies.map((movie) => movieTemplate(movie)).join('');
  movieListElem.insertAdjacentHTML('beforeend', html);
}
