// ---- открытие меню
(() => {
   const buttonMenu = document.querySelector('.header__button-mobail');
   const openMenu = document.querySelector('.header');

   const toggleMenu = e => {
      e.preventDefault();
      openMenu.classList.toggle('is-hidden');
   };

   buttonMenu.addEventListener('click', toggleMenu);
})();

// ----- Вторичное меню MOBAIL
(() => {
   const linckClick = document.querySelector('.nav__link--secondary');
   const openMenuSecondary = document.querySelector('.nav');

   const toggleMenu = e => {
      e.preventDefault();
      openMenuSecondary.classList.toggle('is-open');
   };

   linckClick.addEventListener('click', toggleMenu);
})();

// // ----- Вторичное меню DESKTOP
// (() => {
//    const linckClick = document.querySelector('.nav__link--secondary');
//    const openMenuSecondary = document.querySelector('.nav--hidden');

//    const toggleMenu = e => {
//       e.preventDefault();
//       openMenuSecondary.classList.toggle('is-open');
//    };

//    linckClick.addEventListener('click', toggleMenu);
// })();
