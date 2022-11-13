const sections = document.querySelectorAll('section');

console.log(sections[0].getBoundingClientRect());

addEventListener('scroll', () => {
  sections.forEach((section) => {
    const windowHeight = window.innerHeight;
    if (windowHeight > section.getBoundingClientRect().top) {
      document
        .querySelector('.nav-link-active')
        ?.classList.remove('nav-link-active');

      const sectionId = section.id;
      const linkSelector = `a[href="#${sectionId}"]`;
      document.querySelector(linkSelector).classList.add('nav-link-active');
    }
  });
});
