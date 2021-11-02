// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-05.md

// =========================================================
// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате
// ключ:значение используя Object.keys() и for...of

// console.log('==== Example 1 ====');
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy'; // добавляет поле mood со значением 'happy'
// user.hobby = 'skydiving'; // заменяет значение hobby на 'skydiving'

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// =========================================================
// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат
// и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст,
// то результат должен быть 0.

// console.log('==== Example 2 ====');
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// const values = Object.values(salaries);

// for (const value of values) {
//   sum += value;
// }

// console.log(values);
// console.log(sum);

// =========================================================
// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName),
// которая принимает массив обьектов и строку с названием камня.
// Ф-ция считает и возвращает общую стоимость камней с таким именем,
// ценой и количеством из обьекта

// console.log('==== Example 3 ====');
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return 'stone not found';
// }

// // positive test
// console.log(calcTotalPrice(stones, 'Щебень')); // 400
// console.log(calcTotalPrice(stones, 'Сапфир')); // 2800

// // negative test
// console.log(calcTotalPrice(stones, 'wertyui')); // stone not found

// =========================================================
// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать
// методы для работы с балансом и историей транзакций.

// console.log('==== Example 4 ====');

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       amount,
//       type,
//     };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.unshift(
//       this.createTransaction(amount, Transaction.DEPOSIT),
//     );
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('снятие такой суммы не возможно, недостаточно средств');
//       return;
//     }

//     this.balance -= amount;
//     this.transactions.unshift(
//       this.createTransaction(amount, Transaction.WITHDRAW),
//     );
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let sum = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }

//     return sum;
//   },
// };

// // ====== tests =======
// console.log(account.getBalance());

// account.deposit(100); // 0
// account.deposit(100); // 1
// account.deposit(800); // 2
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(200); // 800
// console.log(account.getBalance());

// account.withdraw(500); // 300
// console.log(account.getBalance());

// account.withdraw(300); // 0
// console.log(account.getBalance());

// account.withdraw(300); // 0
// console.log(account.getBalance());
// console.log(account.transactions);

// console.log(account.getTransactionDetails(3));

// account.deposit(1000); // 1000
// console.log(account.transactions);

// console.log(account.getTransactionTotal(Transaction.DEPOSIT)); // 2000
// console.log(account.getTransactionTotal(Transaction.WITHDRAW)); // 1000

// ====== циклы ======
// const arr = [1, 2, 34];

// // old school
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // old school 2
// for (const item of arr) {
//   console.log(item);
// }

// // modern
// arr.forEach((item) => console.log(item));

// const showItem1 = (item) => {
//   console.log(item);
// };
// arr.forEach(showItem1);

// function showItem2(item) {
//   console.log(item);
// }
// arr.forEach(showItem2);

// ======= this not this )))
// Имеется в виду в конструкторе
// может правильнее через this ?

// const name = 'Генри Сибола';
// const age = 25;

// const user = {
//   name, // name: name
//   age, // age: age
// };

// ====== classes hasOwnProperties =======
// class Human {
//   constructor(name) {
//     this.name;
//   }

//   sayHello() {}
// }

// const bobby = new Human('Bobby');
// bobby.age = 15;

// console.dir(bobby);
// console.log(bobby.hasOwnProperty('age'));
// console.log(bobby.hasOwnProperty('sayHello'));

class Car {
  constructor(model) {
    this.model = model;
    this.speed = 0;
    this.isOn = false;
  }

  acceleration(speed) {
    this.speed = speed;
  }
}

class ColoredCar extends Car {
  constructor(model, color) {
    super(model);
    this.color = color;
  }
}

const bmw = new Car('X5');
const zhiga = new Car('2109');
const kopeyka = new Car('2101');

console.log(bmw);
console.log(zhiga);
console.log(kopeyka);

const redKopeyka = new ColoredCar('2101', 'red');
console.log(redKopeyka);
