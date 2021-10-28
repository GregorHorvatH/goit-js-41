// =========================================================
// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height)
// которая рассчитывает и возвращает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах
// на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки.
// Нецелые числа могут быть заданы в виде 24.7 или 24,7,
// то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;

// console.log('==== Example 1 ====');

// // разделить вес в киллограммах на квадрат высоты человека в метрах
// const calcBMI = (weight, height) => {
//   const numWeight = parseFloat(weight.replace(',', '.'));
//   const numHeight = parseFloat(height.replace(',', '.'));
//   const weightIndex = numWeight / Math.pow(numHeight, 2);

//   return weightIndex.toFixed(1);
// };

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// =========================================================
// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// console.log('==== Example 2 ====');

// const min = (a, b) => (a < b ? a : b);

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// =========================================================
// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади
// прямоугольника со сторонами, значения которых будут переданы
// в параметр dimensions в виде строки.
// Значения гарантированно разделены пробелом.

// console.log('==== Example 3 ====');

// function getRectArea(dimensions) {
//   const dimensionsArr = dimensions.split(' ');
//   const a = parseFloat(dimensionsArr[0]);
//   const b = parseFloat(dimensionsArr[1]);
//   const s = a * b;

//   return s;
// }

// console.log(getRectArea('8 11')); // 88

// =========================================================
// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив
// и использует цикл for, который для каждого элемента массива
// будет выводить в консоль сообщение в формате
// <номер элемента> - <значение элемента>.
// Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива ['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено:
//  1 - Mango
//  2 - Poly
//  3 - Ajax

// console.log('==== Example 4 ====');

// function logItems(items) {
//   items.forEach((value, idx) => {
//     console.log(`${idx + 1} - ${value}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// =========================================================
// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones)
// которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен
// и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// console.log('==== Example 5 ====');

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   namesArr.forEach((name, idx) => {
//     console.log(`${name} - ${phonesArr[idx]}`);
//   });
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// =========================================================
// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)
// которая ищет самое большое число в массиве.

// console.log('==== Example 6 ====');

// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (const current of numbers) {
//     if (current > max) {
//       max = current;
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// =========================================================
// Example 7 - Среднее значение
// Напишите функцию calAverage()
// которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение.
// Все аругменты будут только числами.

// console.log('==== Example 7 ====');

// function calAverage() {
//   const numbers = Array.from(arguments);
//   let sum = 0;

//   for (const num of numbers) {
//     sum += num;
//   }

//   return sum / numbers.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// =========================================================
// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes)
// которая переведёт значение minutes (количество минут)
// в строку в формате часов и минут HH:MM.

// console.log('==== Example 8 ====');

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60); // получаем часы
//   const minutes = totalMinutes % 60; // получам оставшиеся минуты

//   const doubleDigitHours = String(hours).padStart(2, 0); // форматируем числа хх
//   const doubleDigitMinutes = String(minutes).padStart(2, 0); // форматируем числа хх

//   return `${doubleDigitHours}:${doubleDigitMinutes}`; // возвращаем hh:mm
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// =========================================================
// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:
// - addCourse(name) - добавляет курс в конец коллекции
// - removeCourse(name) - удаляет курс из коллекции
// - updateCourse(oldName, newName) - изменяет имя на новое

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   // code guard
//   if (courses.includes(name)) {
//     console.log('У вас уже есть такой курс');
//     return;
//   }

//   courses.push(name);
// }

// function removeCourse(name) {
//   const idx = courses.indexOf(name);

//   // code guard
//   if (idx === -1) {
//     console.log('Курс с таким имененем не найден');
//     return;
//   }

//   courses.splice(idx, 1);
// }

// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);

//   // code guard
//   if (idx === -1) {
//     console.log('Курс с таким имененем не найден');
//     return;
//   }

//   courses.splice(idx, 1, newName);
// }

// // ==== tests ====
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('Express', 'NestJS'); // 'Курс с таким имененем не найден'
