const slider = document.querySelectorAll('.slider-1');
const slider1 = document.querySelectorAll('.slider-2');

let slideIndex = 0;

showSlides();

function showSlides() {
   slide(slider);
   slide(slider1);

   setTimeout(showSlides, 2000);
}

function slide(el) {
   for (let i = 0; i < el.length; i++) {
      el[i].style.display = 'none';
   }

   slideIndex += 1;

   if (slideIndex > el.length) {
      slideIndex = 1;
   }

   el[slideIndex - 1].style.display = 'block';
}
