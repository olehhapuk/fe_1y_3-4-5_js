import './styles/index.scss';
import cardTemplate from './partials/card.hbs';
import menu from './data/menu.json';

console.log(menu);

const rootElem = document.querySelector('#root');

let menuHtml = '';
for (const menuItem of menu) {
  menuHtml += cardTemplate(menuItem);
}

rootElem.innerHTML = menuHtml;
