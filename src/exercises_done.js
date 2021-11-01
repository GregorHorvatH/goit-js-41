// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-05.md

// =========================================================
// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user,
// последовательно:
// - добавляет поле mood со значением 'happy'
// - заменяет значение hobby на 'skydiving'
// - заменяет значение premium на false
// - выводит содержимое объекта user в формате
//   ключ:значение используя Object.keys() и for...of

// console.log('==== Example 1 ====');
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// console.log(user);

// // добавляет поле mood со значением 'happy'
// user.mood = 'happy';

// // заменяет значение hobby на 'skydiving'
// user.hobby = 'skydiving';

// // заменяет значение premium на false
// user.premium = false;

// // - выводит содержимое объекта user в формате
// //   ключ:значение используя Object.keys() и for...of
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

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
// const values = Object.values(salaries);
// let sum = 0;

// for (const salary of values) {
//   sum += salary;
// }

// console.log('Total:', sum);

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
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       return item.price * item.quantity;
//     }
//   }

//   return 0;
// }

// console.log(calcTotalPrice(stones, 'Сапфир')); // 2800
// console.log(calcTotalPrice(stones, 'Бриллиант')); // 8100
// console.log(calcTotalPrice(stones, 'wertg')); // 0

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
//  * Каждая транзакция это объект со свойствами:
//  * id, type и amount
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
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
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
//     this.transactions.push(
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

// console.log('initial:', account.getBalance()); // 0

// account.deposit(100);
// console.log(account.getBalance()); // 100

// account.deposit(900);
// console.log(account.getBalance()); // 1000

// account.withdraw(800);
// console.log(account.getBalance()); // 200

// account.withdraw(300); // снятие такой суммы не возможно, недостаточно средств
// console.log(account.getBalance()); // 200

// console.log(account.transactions); // 3 transactions
// console.log(account.getTransactionDetails(1)); // id: 1, amount: 900, type: 'deposit'

// console.log('deposit:', account.getTransactionTotal('deposit'));
// console.log('withdraw:', account.getTransactionTotal('withdraw'));
