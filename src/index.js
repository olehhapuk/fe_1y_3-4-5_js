import './styles/index.scss';
import postTemplate from './partials/post.hbs';
import commentTemplate from './partials/comment.hbs';

const refs = {
  postsList: document.querySelector('.posts-list'),
  postsLoader: document.querySelector('#postsLoader'),
  loadMoreBtn: document.querySelector('#loadMoreBtn'),
  modal: document.querySelector('#postModal'),
  modalTitle: document.querySelector('.modal-title'),
  modalBody: document.querySelector('.modal-body'),
  modalCommentsList: document.querySelector('.comments-list'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
};

const apiUrl = 'https://jsonplaceholder.typicode.com';
const limit = 27;
let page = 1;
let postsLoading = false;
let totalPostsPages = 0;

refs.loadMoreBtn.addEventListener('click', fetchPosts);
refs.postsList.addEventListener('click', handlePostsListClick);
refs.modalBackdrop.addEventListener('click', handleBackdropClick);

const observer = new IntersectionObserver((entries) => {
  const btnInfo = entries[0];
  if (btnInfo.isIntersecting) {
    fetchPosts();
  }
});

observer.observe(refs.loadMoreBtn);

fetchPosts();

function handleBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function openModal() {
  refs.modal.hidden = false;
}

function closeModal() {
  refs.modal.hidden = true;
  refs.modalTitle.textContent = '';
  refs.modalBody.textContent = '';
  refs.modalCommentsList.innerHTML = `
  <div class="comment-placeholder skeleton-loading"></div>
  <div class="comment-placeholder skeleton-loading"></div>
  <div class="comment-placeholder skeleton-loading"></div>`;
}

function handlePostsListClick(e) {
  if (!e.target.dataset.postid) {
    return;
  }

  const postId = parseInt(e.target.dataset.postid);
  openModal();

  refs.modalTitle.classList.add('skeleton-loading');
  refs.modalBody.classList.add('skeleton-loading');
  Promise.all([fetchPostData(postId), fetchPostComments(postId)])
    .then(([postData, postComments]) => {
      refs.modalTitle.textContent = postData.title;
      refs.modalBody.textContent = postData.body;

      renderComments(postComments);
    })
    .finally(() => {
      refs.modalTitle.classList.remove('skeleton-loading');
      refs.modalBody.classList.remove('skeleton-loading');
    });
}

function renderComments(commentsData) {
  let commentsHtml = '';
  commentsData.forEach((comment) => {
    commentsHtml += commentTemplate({
      email: comment.email,
      body: comment.body,
    });
  });
  refs.modalCommentsList.innerHTML = commentsHtml;
}

function fetchPostData(postId) {
  return fetch(`${apiUrl}/posts/${postId}`).then((data) => data.json());
}

function fetchPostComments(postId) {
  return fetch(`${apiUrl}/posts/${postId}/comments`).then((data) =>
    data.json()
  );
}

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
    const postHtml = postTemplate(post);
    postsHtml += postHtml;
  });

  // refs.postsList.innerHTML = postsHtml; // Не підходить
  // refs.postsList.innerHTML += postsHtml; // Підходить
  refs.postsList.insertAdjacentHTML('beforeend', postsHtml);
}
