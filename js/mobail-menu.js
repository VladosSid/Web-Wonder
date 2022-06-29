(() => {
   const linckClick = document.querySelector('.nav__link--secondary');
   const openMenu = document.querySelector('.nav');

   const toggleMenu = e => {
      e.preventDefault();
      openMenu.classList.toggle('is-open');
   };

   linckClick.addEventListener('click', toggleMenu);
})();
