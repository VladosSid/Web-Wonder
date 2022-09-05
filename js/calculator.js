const formDesingEl = document.querySelector('[data-form="desing"]');
const formSiteEl = document.querySelector('[data-form="site"]');
const formSeoEl = document.querySelector('[data-form="seo"]');
const sumEl = document.querySelector('#sum');

const vareabls = {
   sum: 0,
};
// let sum = 0;

let testByname = 0;
let testType = 0;

const sumValue = event => {
   if (event.target.checked) {
      console.log(event.target.value);

      vareabls.sum += Number(event.target.value);
      return console.log((sumEl.textContent = Number(vareabls.sum)));
   }

   vareabls.sum -= Number(event.target.value);
   return console.log((sumEl.textContent = Number(vareabls.sum)));
};

function name(ev) {
   let zero = testByname * testType;
   vareabls.sum -= Number(zero);

   if (ev.target.name === 'site') {
      testByname = ev.target.value;
   } else {
      testType = ev.target.value;
   }

   let counter = testByname * testType;
   vareabls.sum += Number(counter);

   sumEl.textContent = vareabls.sum;
}

formSiteEl.addEventListener('change', name);
formSeoEl.addEventListener('change', sumValue);
formDesingEl.addEventListener('change', sumValue);
