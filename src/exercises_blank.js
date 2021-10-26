// =========================================================
// Example 1 - Базовые операции с массивом
// - Создайте массив genres с элементами «Jazz» и «Blues».
// - Добавьте «Рок-н-ролл» в конец.
// - Выведите в консоль первый элемент массива.
// - Выведите в консоль последний элемент массива.
// Код должен работать для массива произвольной длины.
// - Удалите первый элемент и выведите его в консоль.
// - Вставьте «Country» и «Reggae» в начало массива.

// console.log('==== Example 1 ====');
// const genres = ['Jazz', 'Blues']; // Создайте массив genres с элементами «Jazz» и «Blues».
// genres.push('Рок-н-ролл');

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());

// genres.unshift('Country', 'Reggae');
// console.log(genres);

// =========================================================
// Example 2 - Массивы и строки
// Напиши скрипт для вычисления
// площади прямоугольника со сторонами,
// значения которых хранятся в переменной values
// в виде строки.
// Значения гарантированно разделены пробелом.
// Для вычисления необходимо умножить их друг на друга.
// S = a × b, где S — площадь; a, b — длина и ширина.

// console.log('==== Example 2 ====');
// const values = '8px 11px'; // значения в виде строки гарантированно разделены пробелом
// const strArr = values.split(' ');
// console.log(strArr);

// const a = parseFloat(strArr[0]);
// const b = parseInt(strArr[1]);
// const s = a * b;
// console.log('S:', s);

// =========================================================
// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку
// в формате номер_элемента: значение_элемента:
//  1: 🍎
//  2: 🍇
//  3: 🍑
// ...
// Нумерация элементов должна начинаться с 1.

// console.log('==== Example 3 ====');
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// fruits.forEach((value, idx, arr) => {
//   console.log(`${idx + 1}: ${value}`);
// });

// =========================================================
// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль
// имя и телефонный номер пользователя.
// Jacob - 89001234567
// William - 89001112233
// ...
// В переменных names и phones хранятся
// строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках
// указывают на соответствие. Количество имен и телефонов
// гарантированно одинаковое.

// console.log('==== Example 4 ====');
// const names = 'Jacob,William,Solomon,Artemis'; // 4 шт.
// const phones = '89001234567,89001112233,890055566377,890055566300'; // 4 шт.
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log(namesArr);
// console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }

// =========================================================
// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки
// кроме первого и последнего.
// Результирующая строка не должна начинаться
// или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

// console.log('==== Example 5 ====');
// const string = 'Welcome to the future';
// const strArr = string.split(' ');
// strArr.pop();
// strArr.shift();

// const result = strArr.join(' ');
// console.log(result);
// console.log(`"${result}"`);

// =========================================================
// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку
// (обратный порядок букв) и выводит ее в консоль.

// console.log('==== Example 6 ====');
// const string = 'Welcome to the future';
// const strArr = string.split('');
// // strArr.reverse();

// let result = '';
// for (let i = strArr.length - 1; i >= 0; i -= 1) {
//   result += strArr[i];
// }

// console.log(result);

// console.log(string.split('').reverse().join(''));

// =========================================================
// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк
// в алфавитном порядке по первой букве элемента.

// console.log('==== Example 7 ====');
// правильная сортировка
// ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
// сортировка по первому символу
// ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort();

// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     if (langs[i][0] > langs[j][0]) {
//       const tmp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = tmp;
//     }
//   }
// }
// console.log(langs);

// =========================================================
// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве.
// Код должен работать для любого массива чисел.
// Используй цикл для решения задачи.

// console.log('==== Example 8 ====');
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
//   if (number > max) {
//     max = number;
//   }
// }

// console.log(min);
// console.log(max);

// =========================================================
// extra - сделать реверс каждого слова не меняя порядок слов
// 1. разбить на массив слов
// 2.1 разбить каждое слово на массив символов
// 2.2 реверснуть
// 2.3 собрать слово в одну строку
// 3. собрать текст с массива слов

// emocleW ot eht erutuf
// const string = 'Welcome to the future';
// console.log(string.split('').reverse().join(''));

// ====== codewars ======
// преобразовать строку в новую строку,
// где каждый символ в новой строке соответствует
// "(" если этот символ появляется только один раз в исходной строке
// или ")" если этот символ появляется более одного раза в исходной строке.
// Игнорируйте использование заглавных букв при определении дубликата символа.
// Примеры "din" => "(((";  "recede" => "()()()"

// function transform(str) {
//   const sybmbols = {};
//   let result = str;

//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i];
//     sybmbols[letter] = sybmbols[letter] ? sybmbols[letter] + 1 : 1;
//   }

//   const symbArr = Object.entries(sybmbols);

//   symbArr.forEach(([key, value]) => {
//     const newSymbol = value === 1 ? '(' : ')';
//     result = result.replaceAll(key, newSymbol);
//   });

//   return result;
// }

// console.log(transform('din')); // "((("
// console.log(transform('recede')); // "()()()"
