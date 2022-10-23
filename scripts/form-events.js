const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = e.target.elements.username.value;
  console.log(username);

  const formData = new FormData(e.currentTarget);
  formData.append('value', 'myvalue');
  console.log(formData);
});

const usernameInput = document.getElementById('username');

// change
usernameInput.addEventListener('change', (e) => {
  console.log('change');
});

const outputElem = document.querySelector('#output');

usernameInput.addEventListener('input', (e) => {
  // console.log('input');

  outputElem.textContent = e.currentTarget.value;
});

usernameInput.addEventListener('focus', () => {
  console.log('focus');
});

usernameInput.addEventListener('blur', () => {
  console.log('blur');
});

const firepowerCheckbox = document.querySelector('#firepowerCheckbox');

firepowerCheckbox.addEventListener('input', (e) => {
  console.log(e.target.checked, e.target.value);
});
