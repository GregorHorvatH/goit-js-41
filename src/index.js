console.log('module 2.2');

// ==== JS function override ====
// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}!`);
//   }
// }

// class Doctor extends Human {
//   sayHello() {
//     console.log(`Hello, I'm dr.${this.name}!`);
//   }
// }

// const bobby = new Human('Bobby');
// bobby.sayHello();

// const house = new Doctor('House');
// house.sayHello();

// ==== arrow function ====
// const x = 5;
// let y = 6;

// function fn1(x) {
//   console.log('fn1:', x);

//   return 7;
// }

// const fn3 = function (x) {
//   console.log('fn3:', x);

//   return 8;
// };

// const fn2 = (x) => {
//   console.log('fn2:', x);

//   return 9;
// };

// fn1(10);
// fn2(20);
// fn3(30);

// console.log('x:', x);
// console.log('y:', y); // 6

// const a = 10;
// const b = 1;

// function sum(a, b) {
//   return a + b;
// }

// console.log('result:', sum(1, 1)); // 1 + 1 = 2
// console.log('result:', sum(10, 10)); // 10 + 10 = 20
// console.log('result:', sum(10, 20)); // 10 + 20 = 30

// ====== arguments =======
// function fn1() {
//   console.log(Array.from(arguments));
// }

// const fn2 = (...args) => console.log(args);

// fn1(1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4);
// fn2(1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4);

// ===== anonym function ======
// const arr = [1, 2, 3];

// const abrakadabra = function abrakadabra(number) {
//   console.log(number);
// };

// arr.forEach(abrakadabra);
