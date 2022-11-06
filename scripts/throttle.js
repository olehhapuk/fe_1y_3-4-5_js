const createBtn = document.querySelector('button');
const listElem = document.querySelector('ul');

const handleCreateClick = _.throttle(() => {
  const messageHtml = '<li>SPAM MESSAGE!!!</li>';
  listElem.insertAdjacentHTML('afterbegin', messageHtml);
}, 1500);

createBtn.addEventListener('click', handleCreateClick);
