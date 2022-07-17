(() => {
   const refs = {
      openBtnDesing: document.querySelector('[data-button-desing]'),
      formDesing: document.querySelector('[data-form-desing]'),
   };

   refs.openBtnDesing.addEventListener('click', toggleModal);

   function toggleModal() {
      refs.formDesing.classList.toggle('is-oppen');
   }
})();

(() => {
   const refs = {
      openBtnSite: document.querySelector('[data-button-site]'),
      formSite: document.querySelector('[data-form-site]'),
   };

   refs.openBtnSite.addEventListener('click', toggleModal);

   function toggleModal() {
      refs.formSite.classList.toggle('is-oppen');
   }
})();

(() => {
   const refs = {
      openBtnPromotion: document.querySelector('[data-button-promotion]'),
      formPromotion: document.querySelector('[data-form-promotion]'),
   };

   refs.openBtnPromotion.addEventListener('click', toggleModal);

   function toggleModal() {
      refs.formPromotion.classList.toggle('is-oppen');
   }
})();
