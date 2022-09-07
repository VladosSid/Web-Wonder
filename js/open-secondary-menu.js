const menuIsOpen = document.querySelector(
   '[data-menu="isOpen"]'
);
const secondaryMenu = document.querySelector(
   '[data-menu="secondaryMenu"]'
);

menuIsOpen.addEventListener('mouseover', () => {
   menuIsOpen.classList.add('is-open');
});

menuIsOpen.addEventListener('mouseout', () => {
   menuIsOpen.classList.remove('is-open');
});
