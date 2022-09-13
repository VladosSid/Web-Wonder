const slider1 = document.querySelectorAll('.slider-1');
const slider2 = document.querySelectorAll('.slider-2');
const slider3 = document.querySelectorAll('.slider-3');
const slider5 = document.querySelectorAll('.slider-5');
const slider6 = document.querySelectorAll('.slider-6');
const slider7 = document.querySelectorAll('.slider-7');
const slider8 = document.querySelectorAll('.slider-8');
const slider9 = document.querySelectorAll('.slider-9');

let slideIndex = 0;

showSlides();

function showSlides() {
   slide(slider1);
   slide(slider2);
   slide(slider3);
   slide(slider5);
   slide(slider6);
   slide(slider7);
   slide(slider8);
   slide(slider9);

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
