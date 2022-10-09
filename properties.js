const inputElem = document.querySelector('input');

// inputElem.value = 'New text';
// console.log(inputElem.id);
// console.log(inputElem.name);
// console.log(inputElem.required);

// console.log(inputElem.value);

inputElem.setAttribute('value', 'New text');
console.log(inputElem.getAttribute('value'));
inputElem.removeAttribute('required');
