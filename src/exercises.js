// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-02.md

// ============================================================================
// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!",
// в противном случае - "Не знаете? ECMAScript!"

// const userInput = prompt('Какое официальное название JavaScript?');
// let answer; // обратите внимание на переиспользование переменной

// if (userInput === 'ECMAScript') {
//   answer = 'Верно!';
// } else {
//   answer = 'Не знаете? ECMAScript!';
// }
// console.log(answer);

// ============================================================================
// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера
// в виде строки формата "14 ч. 26 мин.".
// Если значение переменной minutes равно 0,
// то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 0;
// let timestring; // обратите внимание на переиспользование переменной

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }

// const timestring = minutes > 0
//   ? `${hours} ч. ${minutes} мин.`
//   : `${hours} ч.`;

// console.log(timestring);

// ============================================================================
// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку
// "Это положительное число",
// если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
// Если передали отрицательное число,
// в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число');
// const userNumber = parseInt(userInput);
// let answer;

// if (userNumber > 0) {
//   answer = 'Это положительное число';
// } else if (userNumber < 0) {
//   answer = 'Это отрицательное число';
// } else if (userNumber === 0) {
//   answer = 'Это ноль';
// } else {
//   answer = 'Это не число';
// }

// // if (isNaN(userNumber)) answer = 'Это не число';

// console.log(answer);

// ============================================================================
// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100,
// то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 1170;
// const b = 180;
// let result;

// if (a > 100 && b > 100) {
//   // на что можно ещё заменить?
//   // а если они равные?
//   if (a > b) result = a;
//   if (a < b) result = b;
//   // result = Math.max(a, b);
// } else {
//   result = b + 512;
// }
// console.log(result);

// ============================================================================
// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет
// заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ.
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about/';

// на что можно ещё заменить?
// if (!link.endsWith('/')) link += '/';
// if (link[link.length - 1] !== '/') link += '/';

// console.log(link);

// ============================================================================
// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет
// заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ,
// но только в том случае,
// если в link есть подстрока "my-site".
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) link += '/';

// console.log(link);

// ============================================================================
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 6 используя тернарный оператор.

// let link = 'https://somesite.com/about';

// // if (link.includes('my-site') && !link.endsWith('/')) link += '/';
// link = link.includes('my-site') && !link.endsWith('/') ? `${link}/` : link;

// console.log(link);

// ============================================================================
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку
// в зависимости от значения переменной hours.
// Если значение переменной hours:
// - меньше 17, выводи строку "Pending"
// - больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// - больше 24, выводи строку "Overdue"

// const hours = 10;
// let hourStatus;

// if (hours < 17) {
//   hourStatus = 'Pending';
// } else if (hours >= 17 && hours <= 24) {
//   hourStatus = 'Expires';
// } else if (hours > 24) {
//   hourStatus = 'Overdue';
// }

// console.log(hourStatus);

// ============================================================================
// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта.
// Используй конструкцию if...else.
// - Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// - Eсли до дедлайна 1 день - выведи строку "Завтра"
// - Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// - Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 0;
// let result;

// // в чём недостаток этого кода?
// if (daysUntilDeadline === 0) result = 'Сегодня';
// if (daysUntilDeadline === 1) result = 'Завтра';
// if (daysUntilDeadline === 2) result = 'Послезавтра';
// if (daysUntilDeadline >= 3) result = 'Дата в будущем';

// console.log(result);

// ============================================================================
// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 9 используя switch.
// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// const daysUntilDeadline = 5;
// let result;

// switch (daysUntilDeadline) {
//   case 0: {
//     result = 'Сегодня';
//     break;
//   }
//   case 1: {
//     result = 'Завтра';
//     break;
//   }
//   case 2: {
//     result = 'Послезавтра';
//     break;
//   }
//   default:
//     result = 'Дата в будущем';
// }
// console.log(result);

// ============================================================================
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа
// по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 11;

// for (let i = min; i <= max; i++) {
//   if (i % 5 === 0) {
//     console.log('number:', i);
//   }
// }

// ============================================================================
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt
// и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:
// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt('логин');
// console.log('login:', login);

// if (login === 'Админ') {
//   const password = prompt('пароль');
//   console.log('password:', password);

//   if (password === 'Я админ') {
//     console.log('Здравствуйте!');
//   } else {
//     console.log('Неверный пароль');
//   }
// } else {
//   if (!login || login === null) {
//     console.log('Отменено');
//   } else {
//     console.log('Я вас не знаю');
//   }
// }

// ==== real life admin & password ====
// function checkLoginAndPassword(login, password) {
//   if (login === 'Админ') {
//     if (password === 'Я админ') {
//       console.log('Здравствуйте!');
//     } else {
//       console.log('Неверный пароль');
//     }
//   } else {
//     if (!login || login === null) {
//       console.log('Отменено');
//     } else {
//       console.log('Я вас не знаю');
//     }
//   }
// }

// const login = prompt('логин');
// const password = prompt('пароль');

// console.log('password:', password);
// console.log('login:', login);

// console.log(checkLoginAndPassword(login, password));
