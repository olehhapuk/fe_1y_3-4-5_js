import movieListTemplate from '../partials/movie-list.hbs';

export function renderInHbs(movies) {
  const rootElem = document.querySelector('#root');
  const html = movieListTemplate({
    movies,
  });
  rootElem.insertAdjacentHTML('beforeend', html);
}
