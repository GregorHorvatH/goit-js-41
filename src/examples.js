// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-01.md

// Example 1 - Базовые математические операторы
// Выведи на экран общее количество яблок и винограда.
// Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// console.log(total);

// const diff = Math.abs(apples - grapes);
// console.log(diff);
// console.log(Math.PI);

// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50; // students = students + 50;
// console.log(students);

// ===== ++ ======
// let x = 0;
// console.log(x++); // 0
// console.log(x); // 1

// console.log(++x); // 2

// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные
// вверх/вниз и т.д. значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().
// Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.5;
// console.log(Math.floor(value)); // 27 - всегда вниз
// console.log(Math.ceil(value)); // 28 - всегда вверх
// console.log(Math.round(value)); // 28 - по математике

// console.log(~~value); // целая часть

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock,
// где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const bots = repairBots + defenceBots;
// const message = `Cyberdyne Systems has ${bots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат
// высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height,
// но не как числа, а в виде строк (специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24,7,
// то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';

// const bmi =
//   Number.parseFloat(weight.replace(',', '.')) /
//   Math.pow(Number.parseFloat(height), 2);

// console.log(bmi.toFixed(1)); // 28.8

// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4); // true
// console.log(10 >= '7'); // true
// console.log('2' > '12'); // true
// console.log('2' < '12'); // false
// console.log('4' == 4); // true
// console.log('6' === 6); // false
// console.log('false' === false); // false
// console.log(1 == true); // true
// console.log(1 === true); // false
// console.log('0' == false); // true
// console.log('0' === false); // false
// console.log('Papaya' < 'papaya'); // true
// console.log('Papaya' === 'papaya'); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false

// Example 8 - Логические операторы
// Каким будет результат выражений?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось
// значение переменной incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue:
// null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue ? incomingValue : defaultValue;
// console.log(value);

// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// ======= padStart =======
// const min = 2;
// console.log('min:', min.toString().padStart(2, '0')); // 02
// console.log('min:', 30); // 02
