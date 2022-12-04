import './styles/index.scss';
import cardTemplate from './partials/card.hbs';

const rootElem = document.querySelector('#root');

const cardHtml = cardTemplate({
  text: 'People list',
  people: [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
    },
  ],
});

rootElem.innerHTML = cardHtml;
