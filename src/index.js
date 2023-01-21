import './styles/index.scss';
import postTemplate from './partials/post.hbs';

const refs = {
  postsList: document.querySelector('.posts-list'),
  postsLoader: document.querySelector('#postsLoader'),
  loadMoreBtn: document.querySelector('#loadMoreBtn'),
};

const apiUrl = 'https://jsonplaceholder.typicode.com';
const limit = 27;
let page = 1;
let postsLoading = false;
let totalPostsPages = 0;

refs.loadMoreBtn.addEventListener('click', fetchPosts);

const observer = new IntersectionObserver((entries) => {
  const btnInfo = entries[0];
  if (btnInfo.isIntersecting) {
    fetchPosts();
  }
});

observer.observe(refs.loadMoreBtn);

fetchPosts();

function setPostsLoading(value) {
  if (value === true) {
    postsLoading = value;
    postsLoader.style.display = 'block';
    // refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtn.style.display = 'none';
  } else {
    postsLoading = value;
    postsLoader.style.display = 'none';
    // refs.loadMoreBtn.disabled = false;
    if (page <= totalPostsPages) {
      refs.loadMoreBtn.style.display = 'block';
    }
  }
}

function fetchPosts() {
  if (postsLoading) {
    return;
  }

  setPostsLoading(true);

  const searchParams = new URLSearchParams();
  searchParams.append('_page', page);
  searchParams.append('_limit', limit);

  const searchString = searchParams.toString();

  fetch(apiUrl + '/posts?' + searchString)
    .then((res) => {
      if (res.ok) {
        totalPostsPages = Math.ceil(+res.headers.get('x-total-count') / limit);
        if (page > totalPostsPages) {
          refs.loadMoreBtn.style.display = 'none';
        }
        page++;
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
      setPostsLoading(false);
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

  // refs.postsList.innerHTML = postsHtml; // Не підходить
  // refs.postsList.innerHTML += postsHtml; // Підходить
  refs.postsList.insertAdjacentHTML('beforeend', postsHtml);
}
