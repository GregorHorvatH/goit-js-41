// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-06.md

// =========================================================
// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она
// принимала один объект параметров,
// вместо набора независимых аргументов.

// console.log('==== Example 1 ====');
// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// =========================================================
// Example 2 - Деструктуризация
// Перепиши функцию так,
// чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// console.log('==== Example 2 ====');
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// =========================================================
// Example 3 - Глубокая деструктуризация
// Перепиши функцию так,
// чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// console.log('==== Example 3 ====');
// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// =========================================================
// Example 4 - Деструктуризация
// Перепиши функцию так,
// чтобы она принимала объект параметров
// со свойствами companyName и stock
// и выводила репорт о количестве товаров
// на складе любой компании.

// console.log('==== Example 4 ====');
// // Решениеs;
// function getStockReport({ companyName, stock }) {
//   const values = Object.values(stock);
//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }

//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// =========================================================
// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так,
// чтобы она возвращала новый объект контакта
// с добавленными свойствами id и createdAt,
// а также list со значением "default"
// если в partialContact нет такого свойства.

// console.log('==== Example 5 ====');
// // Решение;
// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     createdAt: Date.now(),
//     ...partialContact,
//     list: partialContact.list || 'default',
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//     list: undefined,
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// =========================================================
// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так,
// чтобы она возвращала новый обьект
// со свойством fullName, вместо firstName и lastName.

// console.log('==== Example 6 ====');
// // Решение
// function transformUsername({ firstName, lastName, ...user }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...user,
//   };
// }

// console.log(
//   transformUsername({
//     total: 55,
//     friendCount: 40,
//     id: 1,
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     firstName: 'Jacob',
//   }),
// );

// console.log(
//   transformUsername({
//     email: 'a.cross@hotmail.com',
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     total: 22,
//     id: 2,
//     friendCount: 20,
//   }),
// );
