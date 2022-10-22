const btn = document.querySelector('#btn');

function onBtnClick() {
  console.log('Clicked');
}

btn.addEventListener('click', onBtnClick);
// btn.removeEventListener('click', onBtnClick);

btn.addEventListener('mouseenter', () => {
  console.log('Mouse entered');
});

btn.addEventListener('mouseleave', () => {
  console.log('Mouse left');
});

// btn.addEventListener('mousemove', (e) => {
//   console.log(e.clientX, e.clientY);
// });

btn.addEventListener('dblclick', () => {
  console.log('Opening program');
});

btn.addEventListener('contextmenu', (e) => {
  console.log('Context menu');
  e.preventDefault(); // Зупинити поведінку за замовчуванням
});

const box1 = document.querySelector('.box1');

box1.addEventListener('mouseenter', () => {
  console.log('Mouse enter');
});

box1.addEventListener('mouseleave', () => {
  console.log('Mouse leave');
});

box1.addEventListener('mouseover', () => {
  console.log('Mouse over');
});

box1.addEventListener('mouseout', () => {
  console.log('Mouse out');
});
