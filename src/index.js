console.log('module 3.2');

// ===== q.1 =====
// const apartment = {
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// // Нужно вывести
// // lastTag - последний элемент массива в свойстве tags.

// // Такое решение не подходит:(
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(lastTag);

// ==== q.3 ====
// function fn({ name = 'Nemo', age: yearsOld = 0 } = {}) {
//   console.log(`Hello my name is ${name} and I'm ${yearsOld} years old!`);
// }

// fn({ name: 'Bobby', age: 15 });
// fn({ name: 'Bobby' });
// fn({ age: 20 });
// fn({ age: 15, name: 'Bobby' });
// fn({});
// fn();

// ===== q.4. =====
// const fn = (a, b, ...wert) => console.log(a + b, wert);

// fn(1, 2, 3, 4);

// ===== q.5. =====
// let a = 2;
// let b = 5;
// console.log(a, b);

// let tmp = a;
// a = b;
// b = tmp;
// console.log(a, b);

// let x = 1;
// let y = 2;
// console.log(x, y);

// [y, x] = [x, y];
// console.log(x, y);

// ==== kahoot ====
// const user = {
//   email: 'www@www',
//   age: 20,
// };
// const { email: userEmail } = user;
// console.log(email);

// ==== kahoot ====
// function fn(a, b, c, ...dfghjkl) {
//   console.log(dfghjkl);
// }

// fn(1, 2, 3, 4, 5);
