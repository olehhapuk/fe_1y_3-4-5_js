import newsData from './news.js';

const newsListElem = document.querySelector('.news-list');

newsListElem.addEventListener('click', (e) => {
  const newsItemElem = e.target.closest('.news-item');
  if (!newsItemElem) {
    return;
  }

  // console.log(newsItemElem.dataset.id);

  if (e.target.classList.contains('news-save-btn')) {
    alert('Додано в збережені');
  } else {
    alert(`Переглядаємо новину ${newsItemElem.dataset.id}`);
  }
});

function renderNews() {
  let finalHtml = '';
  newsData.forEach((newsItem) => {
    const { id, title } = newsItem;

    finalHtml += `
      <li class="news-item" data-id="${id}">
        <h4 class="news-title">${title}</h4>
        <button type="button" class="btn news-save-btn">Save</button>
      </li>`;
  });

  newsListElem.insertAdjacentHTML('beforeend', finalHtml);
}

renderNews();
