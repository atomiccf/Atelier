export function initNavigation() {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const navLinks = document.querySelectorAll('.header__link');
  const body = document.body;

  function toggleMenu() {
    burger?.classList.toggle('active');
    menu?.classList.toggle('active');
    body.classList.toggle('lock');
  }

  function closeMenu() {
    burger?.classList.remove('active');
    menu?.classList.remove('active');
    body.classList.remove('lock');
  }

  burger?.addEventListener('click', toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.classList.contains('active')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      closeMenu();
    }
  });
}

export function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}
