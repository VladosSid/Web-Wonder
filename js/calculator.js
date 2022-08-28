const formDesingEl = document.querySelector('[data-form="desing"]');
const formSiteEl = document.querySelector('[data-form="site"]');
const formSeoEl = document.querySelector('[data-form="seo"]');
const sumEl = document.querySelector('#sum');

let sum = 0;

const sumValue = event => {
   if (event.target.checked) {
      console.log(event.target.value);

      sum += Number(event.target.value);
      return console.log((sumEl.textContent = Number(sum)));
   }

   sum -= Number(event.target.value);
   return console.log((sumEl.textContent = Number(sum)));
};

let testByname = 0;
let testType = 0;

function name(ev) {
   let counter = testByname * testType;

   if (ev.target.name === 'site') {
      testByname = ev.target.value;
   } else {
      testType = ev.target.value;
   }
   console.log(testByname);
   console.log(testType);

   sum += Number(counter);
   return (sumEl.textContent = sum);
}

formSiteEl.addEventListener('change', name);
formSeoEl.addEventListener('change', sumValue);
formDesingEl.addEventListener('change', sumValue);
