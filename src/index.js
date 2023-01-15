import './styles/index.scss';
import postTemplate from './partials/post.hbs';

const refs = {
  postsList: document.querySelector('.posts-list'),
  postsLoader: document.querySelector('#postsLoader'),
};

const apiUrl = 'https://jsonplaceholder.typicode.com';

fetchPosts();

function fetchPosts() {
  postsLoader.style.display = 'block';

  // Delay loader display
  // let timerId = setTimeout(() => {
  //   postsLoader.style.display = 'block';
  // }, 1000);

  const page = 1;
  const limit = 10;

  fetch(apiUrl + '/posts' + `?_page=${page}&_limit=${limit}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.error('Fetch error');
      }
    })
    .then((data) => {
      renderPosts(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      // clearTimeout(timerId);
      postsLoader.style.display = 'none';
    });
}

function renderPosts(postsData) {
  let postsHtml = '';
  postsData.forEach((post) => {
    const postHtml = postTemplate({
      title: post.title,
      body: post.body,
    });
    postsHtml += postHtml;
  });

  refs.postsList.insertAdjacentHTML('beforeend', postsHtml);
}
