console.log('module 5.1');

// function sayHello(a, b) {
//   console.log(this, a + b);
// }

// const obj1 = { name: 'Bobby' };
// const obj2 = { name: 'Peter' };

// const fn1 = sayHello.bind(obj1);
// const fn2 = sayHello.bind(obj2);

// setTimeout(fn1, 2000); // {name: 'Bobby'}
// setTimeout(fn2, 4000); // {name: 'Peter'}

// const obj3 = { name: 'John' };
// const obj4 = { name: 'Chris' };

// sayHello.call(obj3, 1, 1);
// sayHello.apply(obj4, [1, 1]);

// function ffff() {
//   const args = Array.from(arguments);

//   sayHello.apply(obj4, args);
// }

// ffff(1, 10);

// ===== interview question =====
// we have Call, Apply
// but no Bind
// create your own Bind

// function sayHello(a, b) {
//   console.log(this, a + b);
// }

// const obj1 = { name: 'Bobby' };
// const obj2 = { name: 'Peter' };

// // const fn1 = sayHello.bind(obj1);

// // fn1(1, 1);

// function myBind(context, callback) {
//   return function () {
//     callback.apply(context, arguments);
//   };
// }

// const fn2 = myBind(obj1, sayHello);

// fn2(1, 1); // { name: 'Bobby' }

// ===== short bind ======
// function sayHello() {
//   console.log(this.name);
// }

// const obj1 = { name: 'Bobby' };
// const obj2 = { name: 'Peter' };

// // sayHello.call(obj1);
// // sayHello.call(obj2);

// setTimeout(sayHello.bind(obj1), 1000);
// setTimeout(sayHello.bind(obj2), 2000);

// ===== array deep copy ======
// const arr1 = [{ name: 'Bobby' }, { name: 'Peter' }];
// const arr2 = _.cloneDeep(arr1);

// arr2[0].name = 'Chris';

// console.log(arr1);
// console.log(arr2);

// ==== undefined / window ====
// function fn() {
//   console.log(this);
// }

// fn();
