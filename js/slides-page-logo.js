var slideIndex = 0;

showSlides();

function showSlides() {
   var i;
   const slides =
      document.getElementsByClassName('slider-1');

   slide(slides);

   setTimeout(showSlides, 2000);
}

function slide(el) {
   for (i = 0; i < el.length; i++) {
      el[i].style.display = 'none';
   }
   slideIndex++;
   if (slideIndex > el.length) {
      slideIndex = 1;
   }

   el[slideIndex - 1].style.display = 'flex';
}
