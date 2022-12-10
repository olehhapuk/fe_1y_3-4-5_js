import './styles/index.scss';
import movies from './data/movies.json';
// import { renderMap } from './scripts/renderMap';
import { renderInHbs } from './scripts/renderInHbs';

// renderMap(movies);
renderInHbs(movies);

const theme = localStorage.getItem('theme');
console.log(theme);

localStorage.setItem('theme', 'light');
