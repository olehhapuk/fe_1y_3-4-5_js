import './styles/index.scss';
import movies from './data/movies.json';
import { renderInHbs } from './scripts/renderInHbs';
import { THEME, THEME_KEY } from './scripts/constants';

renderInHbs(movies);

const htmlElem = document.querySelector('html');
const themeSwitcherInput = document.querySelector('.theme-switcher__input');

const defaultTheme = htmlElem.className;

function changeTheme(themeName) {
  localStorage.setItem(THEME_KEY, themeName);
  htmlElem.className = '';
  htmlElem.classList.add(themeName);
  // themeSwitcherInput.checked = themeName === 'light';
}

function checkPersistedTheme() {
  const persistedTheme = localStorage.getItem(THEME_KEY);
  // changeTheme(persistedTheme || defaultTheme);
  if (persistedTheme) {
    changeTheme(persistedTheme);
  } else {
    changeTheme(defaultTheme);
  }

  if (persistedTheme === THEME.Light) {
    themeSwitcherInput.checked = true;
  } else {
    themeSwitcherInput.checked = false;
  }
}

checkPersistedTheme();

themeSwitcherInput.addEventListener('click', (e) => {
  if (e.target.checked) {
    changeTheme(THEME.Light);
  } else {
    changeTheme(THEME.Dark);
  }
});
