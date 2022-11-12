import news from './news.js';

const searchInput = document.querySelector('input');
const newsListElem = document.querySelector('#news');
const loaderElem = document.querySelector('#newsLoader');

function renderNews(searchResults) {
  const resultsHtml = searchResults
    .map((title) => `<li>${title}</li>`)
    .join('');
  newsListElem.innerHTML = resultsHtml;
}

function debounce(callback, timeout) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), timeout);
  };
}

const handleSearchInput = debounce((e) => {
  const searchQuery = e.target.value;
  loadNews(searchQuery, renderNews);
}, 750);

function loadNews(query, callback) {
  loaderElem.style.display = 'block';

  setTimeout(() => {
    const findText = query.toLowerCase();
    const titles = news.filter((title) => {
      return title.toLowerCase().includes(findText);
    });

    callback(titles);
    loaderElem.style.display = 'none';
  }, 150);
}

loadNews('', renderNews);

searchInput.addEventListener('input', handleSearchInput);
