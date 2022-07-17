const price1 = 10;
const price2 = 30;
const price3 = 50;
const price4 = 100;

console.log(price1);

// const checkbox = document.getElementById('logo');
// const btn = document.getElementById('btn');
// function sumPrice() {
let sum = 0;
document.getElementById('logo').addEventListener('click', () => {
   if (document.getElementById('logo').checked) {
      sum += price2;
   }

   console.log(sum);
});

//    document.getElementById('site-design').addEventListener('click', () => {
//       if (document.getElementById('site-design').checked) {
//          sum += price3;
//       }
//    });
// }
console.log(price3);
