console.log('module 3.1');

// ==== q.1 ====
// function fn(user) {
//   console.log(user.name); // "Генри Сибола"
//   console.log(user.age); // 25
// }

// fn({
//   name: 'Генри Сибола',
//   age: 25,
// });

// ===== q.2 =====
// const users = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Chris', age: 20 },
//   { name: 'Peter', age: 30 },
// ];

// for (const user of users) {
//   console.log(`${user.name} - ${user.age}`);
// }

// ==== this ====
// const obj = {
//   name: 'Bobby', // string
//   age: 15, // number
//   adult: false,

//   sayHello: function () {
//     // console.log(this.name);
//     console.log(`Hello my name is ${this.name}`);
//   },
// };

// obj.sayHello();

// ==== q.4 =====
// const user = Object.freeze({
//   age: 25,
//   name: 'Генри Сибола',
// });
// console.log(user.name); // 'Генри Сибола'

// user.name = 'Harry Potter';
// console.log(user.name); // 'Генри Сибола'

// const user = {
//   age: 25,
//   name: 'Генри Сибола',
// };
// const user2 = user; // копирует ссылку
// const user2 = { ...user }; // копия объекта

// user2.name = 'Harry Potter';
// console.log(user);
// console.log(user2);

// const bookShelf = {
//   books: ['The Last Kingdom'],

//   getBooks() {
//     console.log(this);
//   },
// };

// Перед точкой стоит объект bookShelf,
// поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}
// звідки взялась f в: getBooks: f}

// ==== hasOwnProperty ====
// const user = {
//   age: 25,
//   name: 'Генри Сибола',
//   sayHello: function () {},
// };

// console.log(user.hasOwnProperty('sayHello'));
// console.log(user.hasOwnProperty('aewfa'));
