const elementsFade = document.querySelectorAll('[data-animation]');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const animName = entry.target.dataset.animation;
      entry.target.classList.add(animName);
    }
  });
});

elementsFade.forEach((elem) => {
  observer.observe(elem);
});
