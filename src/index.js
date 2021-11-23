console.log('Q&A 1');

// function Car1(model) {
//   this.model = model;
// }

// class Car2 {
//   constructor(model) {
//     this.model = model;
//   }

//   carPrice2() {}
// }

// console.log(new Car1('qwerty'));
// console.log(new Car2('asdfg'));

// function Cars() {
//   // this.carPrice1 = function () {}; // метод 1
// }

// // метод 2
// Cars.prototype.carPrice2 = function (price) {};

// console.log(new Cars());
// console.log(new Cars());
// console.log(new Cars());
// console.log(new Cars());

// ===== endless loop =====
// do {} while(true)
// const myButton = document.getElementById('my-button');

// myButton.addEventListener('click', () => {
//   console.log(new Date());
// });

// x = 75;
// do
// prompt
// 50 -> 50 < x
// 80 -> 80 > x
// 75 -> hurray!!!!
// exit
// while

// ====== reduce ======
// const getLettersCount = (str) =>
//   str.split('').reduce(
//     (acc, letter) => ({
//       ...acc,
//       [letter]: acc[letter] ? acc[letter] + 1 : 1,
//     }),
//     {},
//   );

// console.log(getLettersCount('abrakadabra')); // { a: 5, b: 2 ... }

// ====== closure and IIFE ======
// for (var i = 1; i < 5; i += 1) {
//   (function fn(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 100);
//   })(i);
// }

// ===== constructors =====
// class Human {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(newName) {
//     this.#name = newName;
//   }
// }

// class Doctor extends Human {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }

// const bobby = new Human('Bobby');
// console.log(bobby);

// const house = new Doctor('House', 30);
// console.log(house);

// ==== factorial ====
// x = !3
// 4 * 3 * 2 * 1
// x * (x - 1) * (x - 2)

// function factorial(x) {
//   let res = 1;

//   for (let i = 1; i <= x; i += 1) {
//     res *= i;
//   }

//   return res;
// }

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24

// ==== factorial recursion ====
// x * (x - 1) * (x - 2)
// const factorial = (x) => (x === 1 ? 1 : x * factorial(x - 1));

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24

// -----
// KISS
// -----
// Keep
// It
// Simple
// Stupid

// ===== array full copy =====
// const arr1 = [{ name: 'Bobby' }, { name: 'Peter' }];
// const arr2 = arr1.map((item) => ({ ...item }));

// arr2[0].name = 'Chris';

// console.log(arr1);
// console.log(arr2);

// ===== array full copy recursion =====

// ====== local storage ======
// const arr1 = [{ name: 'Bobby' }, { name: 'Peter' }];

// localStorage.setItem('users', JSON.stringify(arr1));

// console.log(localStorage.getItem('test'));
// console.log(JSON.parse(localStorage.getItem('users')));
