console.log('Module 1.2');

// ===== break =====
// for (let i = 0; i < 100; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log(i);
//     break;
//   }
// }

// ===== continue =====
// for (let i = 0; i < 100; i++) {
//   if (i % 5 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// ===== ternary =====
// if (true) {
//   console.log(1);
// } else {
//   console.log(2);
// }

// console.log(x > 5 ? 1 : 0);

// ===== slice =====
//           0123456789
// const str = 'I love JS!';
// const subStr1 = str.slice(7, 9);
// const subStr2 = str.substring(7, 9);
// const subStr3 = str.substr(7, 2);

// console.log(subStr1); // slice
// console.log(subStr2); // substring
// console.log(subStr3); // substr

// =====================
// Функция checkForSpam(message) принимает строку (параметр message),
// проверяет её на содержание запрещенных слов spam и sale,
// и возвращает результат проверки. Слова в строке параметра message
// могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale)
// то функция возвращает буль true.
// Если в строке нет запрещенных слов,
// функция возвращает буль false.

// const checkForSpam = (message) => {
//   const words = ['spam', 'sale', 'taxi', 'robot']; // string
//   const str = message.toLowerCase();
//   let hasSpam = false;

//   for (let i = 0; i < words.length; i += 1) {
//     const word = words[i];

//     if (str.includes(word)) {
//       hasSpam = true;
//       break;
//     }
//   }

//   return hasSpam; // true | false
// };

// console.log(checkForSpam('lorem ipsum')); // false
// console.log(checkForSpam('lorem sPaM ipsum')); // true
// console.log(checkForSpam('lorem sALE ipsum')); // true
// console.log(checkForSpam('lorem robot ipsum')); // true
// console.log(checkForSpam('lorem taxi ipsum')); // true

// =========== login and password ===========
// const checkLogin = (userLogin) => {
//   const logins = ['admin', 'root', 'user']; // string
//   // let hasLogin = false;

//   // for (const login of logins) {
//   //   if (userLogin === login) {
//   //     hasLogin = true;
//   //     break;
//   //   }
//   // }

//   // return hasLogin; // true | false
//   return logins.includes(userLogin);
// };

// console.log(checkLogin('dfghdfh')); // false
// console.log(checkLogin('ert')); // false
// console.log(checkLogin('admin')); // true
// console.log(checkLogin('user')); // true

// ===== kahoot 1 =====
// 0 || 'Mango'
// console.log(0 || 'Mango');
// if (0 || 'Mango') {
//   console.log('hurray');
// }

// 0 || false
// console.log(false || 0);
// if (false || 0) {
//   console.log('hurray');
// }

// 'Poly' || 'Mango'
// console.log('Poly' || 'Mango');

// const userInput = prompt('enter name');
// console.log('Hello:', userInput || 'Nemo');

// ======= kahoot =======
// [0]
// if ([0]) {
//   console.log('hurray');
// }
