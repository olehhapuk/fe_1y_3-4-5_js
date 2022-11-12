const createBtn = document.querySelector('button');
const listElem = document.querySelector('ul');

function throttle(callback, timeout) {
  let isWaiting = false;
  return (...args) => {
    if (isWaiting === false) {
      callback(...args);
      isWaiting = true;
      setTimeout(() => (isWaiting = false), timeout);
    }
  };
}

const handleCreateClick = throttle(() => {
  const messageHtml = '<li>SPAM MESSAGE!!!</li>';
  listElem.insertAdjacentHTML('afterbegin', messageHtml);
}, 1500);

createBtn.addEventListener('click', handleCreateClick);
