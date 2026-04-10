(function () {
  'use strict';

  function initNavigation() {
    var burger = document.querySelector('.header__burger, .header_burger');
    var menu = document.querySelector('.header__menu, .header_menu');
    var navLinks = document.querySelectorAll('.header__link, .link a');
    var body = document.body;

    function toggleMenu() {
      if (burger) burger.classList.toggle('active');
      if (menu) menu.classList.toggle('active');
      body.classList.toggle('lock');
    }

    function closeMenu() {
      if (burger) burger.classList.remove('active');
      if (menu) menu.classList.remove('active');
      body.classList.remove('lock');
    }

    if (burger) {
      burger.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu && menu.classList.contains('active')) {
        closeMenu();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
        closeMenu();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();
