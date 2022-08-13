console.log('start');

const pizzaPalace = {
   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
   order(pizzaName, onSuccess, onError) {
      if (this.pizzas.includes(pizzaName)) {
         console.log(onSuccess(pizzaName));
         return;
      }

      console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
   },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
   return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
//[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 },
// { name: "Stone skin", price: 520 } ]

// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
//[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },
//{ name: "Invulnerability potion", price: 520 } ]

// atTheOldToad.removePotion('Dragon breath');
// [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.removePotion('Speed potion');
// [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// console.log(atTheOldToad.potions);
// atTheOldToad.getPotions();
// [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },
// { name: "Stone skin", price: 520 } ]

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// в массиве potions последним элементом будет этот объект

// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// в массиве potions последним элементом будет этот объект

// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// массив potions не изменяется

// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// массив potions не изменяется

// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// возвращает строку "Error! Potion Dragon breath is already in your inventory!"

// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// возвращает строку "Error! Potion Stone skin is already in your inventory!"

console.log('end');

// перебрать масив свойств
// узнать все ключи обектов
// перебрать масив ключей и узнать порядеовый номре
// перебрать масив значений и узнать порядковый номер
// запушить мунжное значение в масив
