import './styles/index.scss';

import {
  fetchLanguage,
  fetchLanguageCallback,
  fetchLanguagePromise,
} from './scripts/fetchLanguages';

// const language = fetchLanguage('Ruby');
// if (language) {
//   const person = {
//     name: 'John',
//     programmingLanguage: language.name,
//   };

//   console.log(`${person.name} coding with ${person.programmingLanguage}`);
// } else {
//   console.error('Ruby not found');
// }

// fetchLanguageCallback('Swift', (language) => {
//   if (language instanceof Error) {
//     console.error(language);
//   } else {
//     console.log(`John coding with ${language.name}`);
//   }
// });

const loaderElem = document.querySelector('.loader');
const resultElem = document.querySelector('.result');
const errorElem = document.querySelector('.error');
const formElem = document.querySelector('.form');

formElem.addEventListener('submit', (e) => {
  e.preventDefault();

  const query = e.target.elements.query.value;
  searchLanguage(query);
});

function searchLanguage(query) {
  loaderElem.style.display = 'block';
  resultElem.style.display = 'none';
  errorElem.style.display = 'none';

  fetchLanguagePromise(query)
    .then((language) => {
      resultElem.textContent = `John coding with ${language.name}`;
      resultElem.style.display = 'block';
    })
    .catch((error) => {
      errorElem.textContent = error;
      errorElem.style.display = 'block';
    })
    .finally(() => {
      loaderElem.style.display = 'none';
    });
}
