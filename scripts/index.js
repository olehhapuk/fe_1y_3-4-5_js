const box1Elem = document.querySelector('.box-1');
const box2Elem = document.querySelector('.box-2');
const box3Elem = document.querySelector('.box-3');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
    }
  });
});

observer.observe(box1Elem);
observer.observe(box2Elem);
observer.observe(box3Elem);
