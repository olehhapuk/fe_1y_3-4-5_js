import './styles/index.scss';
import cardTemplate from './partials/card.hbs';

const rootElem = document.querySelector('#root');

const cardHtml = cardTemplate({
  content: 'Card content 1',
});

rootElem.innerHTML = cardHtml;
