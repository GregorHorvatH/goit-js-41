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
// genres.push('Rock and roll'); // Добавьте «Рок-н-ролл» в конец.

// console.log(genres[0]); // Выведите в консоль первый элемент массива.
// console.log(genres[genres.length - 1]); // Выведите в консоль последний элемент массива.

// console.log(genres.shift()); // Удалите первый элемент и выведите его в консоль.
// console.log(genres); // посмотрим удалился ли первый элемент

// genres.unshift('Country', 'Reggae'); // Вставьте «Country» и «Reggae» в начало массива.
// console.log(genres); // посмотрим добавились ли первые элементы

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
// const values = '8 11'; // значения в виде строки гарантированно разделены пробелом
// const strValues = values.split(' ');
// const s = parseFloat(strValues[0]) * parseFloat(strValues[1]);

// console.log('A =', strValues[0]);
// console.log('B =', strValues[1]);
// console.log('S =', s);

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

// // решение через классический цикл
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// // решение через forEach
// fruits.forEach((fruit, idx, arr) => {
//   console.log(`${idx + 1}: ${fruit}`);
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

// // убедимся, что массивы правильные
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
// console.log(strArr); // проверяем массив слов

// strArr.shift();
// strArr.pop();
// console.log(strArr); // проверяем массив слов

// const result = strArr.join(' ');
// console.log(result);
// console.log(`"${result}"`); // убедимся в отсутствии пробелов в начале и в конце строки

// =========================================================
// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку
// (обратный порядок букв) и выводит ее в консоль.

// console.log('==== Example 6 ====');
// const string = 'Welcome to the future';
// const strArr = string.split(''); // разбиваем строку на массив букв
// console.log(strArr); // проверяем массив букв

// const reversedArr = strArr.reverse();
// console.log(strArr); // проверяем массив букв в обратном порядке

// const reversedStr = reversedArr.join('');
// console.log(reversedStr);

// // более короткий вариант (chaining)
// const rev = string.split('').reverse().join('');
// console.log(rev);

// =========================================================
// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк
// в алфавитном порядке по первой букве элемента.

// console.log('==== Example 7 ====');
// // правильная сортировка
// // ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
// // сортировка по первому символу
// // ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// // langs.sort(); // не подходит в данном случае
// console.log(langs); // до

// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i; j < langs.length; j += 1) {
//     if (langs[i][0] > langs[j][0]) {
//       const temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }
// console.log(langs); // после

// =========================================================
// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве.
// Код должен работать для любого массива чисел.
// Используй цикл для решения задачи.

// console.log('==== Example 8 ====');
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0]; // берём первый элемент массива как стартовый минимум
// let max = numbers[0]; // берём первый элемент массива как стартовый минимум

// for (const num of numbers) {
//   // находим минимум
//   if (num < min) {
//     min = num;
//   }

//   // находим максимум
//   if (num > max) {
//     max = num;
//   }
// }

// console.log(min); // 1
// console.log(max); // 94
