(() => {
   const linckClick = document.querySelector('.nav__link--secondary');
   const openMenu = document.querySelector('.nav');

   const toggleMenu = () => {
      openMenu.classList.toggle('is-open');
   };

   linckClick.addEventListener('click', toggleMenu);
})();
