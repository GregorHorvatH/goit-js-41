console.log('module 4.1');

// ===== closure =====
// function makeSheff(name) {
//   function makeDish(dish) {
//     console.log(`${name} готовит ${dish}`);
//   }

//   return makeDish;
// }

// const mango = makeSheff(`Jahn`); // makeDish

// mango(`котлеты`); // - вот здесь вызывается внутрення функция makeDish
// mango(`пирожок`); // - вот здесь вызывается внутрення функция makeDish

// ===== closure 2 =====
// function Counter(name, from = 1, step = 1) {
//   let i = from;

//   return function () {
//     console.log(name, i);
//     i += step;
//   };
// }

// const counter1 = Counter('counter 1'); // function
// const counter2 = Counter('counter 2', 10, 3); // function

// counter1(); // 1
// counter1(); // 2
// counter1(); // 3

// counter2(); // 1
// counter2(); // 2

// counter1(); // 4
// counter1(); // 5

// counter2(); // 2
// counter2(); // 2
// counter2(); // 2
// counter2(); // 2
// counter2(); // 2

// =====================
// Example 9 - Метод forEach

// const calсulateAverage = (...args) =>
//   args.reduce((acc, value) => acc + value, 0) / args.length;

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// =====================
// const getOddX2 = (items) => {
//   const newArr = [];

//   items.forEach((value) => {
//     if (value % 2 === 0) {
//       newArr.push(value * 2);
//     }
//   });

//   return newArr;
// };

// const getOddX2Reduce = (items) =>
//   items.reduce((acc, item) => (item % 2 === 0 ? [...acc, item * 2] : acc), []);

// console.log(getOddX2([1, 2, 3, 4])); // [4, 8]
// console.log(getOddX2([10, 11, 12])); // [20, 24]

// console.log(getOddX2Reduce([1, 2, 3, 4])); // [4, 8]
// console.log(getOddX2Reduce([10, 11, 12])); // [20, 24]

// =====================
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       onSuccess(pizzaName);
//     } else {
//       onError('sdfghjk');
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
// }

// // Callback for onError
// function onOrderError(error) {
//   console.log(`Error! ${error}`);
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
