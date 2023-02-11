// import './scripts/chaining';

import axios from 'axios';
import hitTemplate from './partials/hit.hbs';

// https://hn.algolia.com/api/v1/search?query=javascript&tags=story...

const refs = {
  newsList: document.querySelector('#news-list'),
};

axios
  .get('https://hn.algolia.com/api/v1/search', {
    params: {
      query: 'javascript',
      tags: 'story',
      page: 0,
      hitsPerPage: 12,
    },
  })
  .then((res) => {
    let html = '';
    res.data.hits.forEach((hit) => {
      const hitHtml = hitTemplate(hit);
      html += hitHtml;
    });
    refs.newsList.innerHTML = html;
  });
