const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');

box1.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  console.log(e.target);
});

// box2.addEventListener('click', (e) => {
//   console.log(e.currentTarget);
// });

// box3.addEventListener('click', (e) => {
//   e.stopPropagation(); // Зупиняє вспливання події
//   e.stopImmediatePropagation(); // Зупиняє вспливання події та інші обробники події
//   console.log(e.currentTarget);
// });

// box3.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log(e.currentTarget);
// });
