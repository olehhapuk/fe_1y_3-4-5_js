const tagListElem = document.querySelector('.tag-list');
const outputElem = document.querySelector('.output');

const tagButtons = tagListElem.querySelectorAll('button');

tagListElem.addEventListener('click', (e) => {
  // console.log(e.target.nodeName); // Назва елемента
  // console.log(e.target.classList.contains('tag-btn')); // Перевірки на існування класу

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  tagButtons.forEach((tagButton) =>
    tagButton.classList.remove('tag-btn-active')
  );

  e.target.classList.add('tag-btn-active');

  outputElem.textContent = e.target.textContent.slice(1);
});
