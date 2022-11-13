const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document
          .querySelector('.nav-link-active')
          ?.classList.remove('nav-link-active');

        const sectionId = entry.target.id;
        const linkSelector = `a[href="#${sectionId}"]`;
        document.querySelector(linkSelector).classList.add('nav-link-active');
      }
    });
  },
  {
    threshold: 1,
  }
);

sections.forEach((section) => sectionObserver.observe(section));
