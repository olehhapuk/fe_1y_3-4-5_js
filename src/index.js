// import './scripts/chaining';

import axios from 'axios';
import hitTemplate from './partials/hit.hbs';
import numeral from 'numeral';

const refs = {
  newsList: document.querySelector('#news-list'),
  resultsCount: document.querySelector('#resultsCount'),
  pagesCount: document.querySelector('#pagesCount'),
  searchForm: document.querySelector('#searchForm'),
  loadMoreBtn: document.querySelector('#loadMoreBtn'),
};

let query = '';
let page = 0;

refs.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  query = refs.searchForm.elements.query.value;
  refs.newsList.innerHTML = '';
  page = 0;
  fetchNews();
});

refs.loadMoreBtn.addEventListener('click', () => {
  fetchNews();
});

function fetchNews() {
  refs.loadMoreBtn.disabled = true;
  refs.loadMoreBtn.textContent = 'Loading...';

  // https://hn.algolia.com/api/v1/search?query=javascript&tags=story...
  axios
    .get('https://hn.algolia.com/api/v1/search', {
      params: {
        query,
        page,
        tags: 'story',
        hitsPerPage: 12,
      },
    })
    .then((res) => {
      let html = '';
      res.data.hits.forEach((hit) => {
        const hitHtml = hitTemplate(hit);
        html += hitHtml;
      });
      refs.newsList.innerHTML += html;

      refs.resultsCount.textContent = numeral(res.data.nbHits).format('0a');
      refs.pagesCount.textContent = res.data.nbPages;
      page++;

      if (page === res.data.nbPages) {
        refs.loadMoreBtn.classList.replace('d-block', 'd-none');
      } else {
        refs.loadMoreBtn.classList.replace('d-none', 'd-block');
      }
    })
    .finally(() => {
      refs.loadMoreBtn.disabled = false;
      refs.loadMoreBtn.textContent = 'Load more...';
    });
}
