console.log('module 2.1');

// q.1
// const clients = ['Mango', 'Poly', 'Ajax'];

// for (const value of clients) {
//   console.log(value);
// }

// q.2
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients.slice(-2));

// q.3
// function fn() {
//   console.log(Array.from(arguments));
// }

// console.log(Math.min(2, 5, 3, 7, 1, 5, 6, 9));
// console.log(fn(2, 5, 3, 7, 1, 5, 6, 9));

// q.4
// const arr = [1, 2, 3, 4, 'erty', undefined];

// for (const value of arr) {
//   if (!isNaN(value)) {
//     console.log(value);
//   }
// }

// q.5
// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple');
// console.log(colors); // ["red", "green", "purple", "blue"]

// q.6
// const colors = ['red', 'green', 'blue'];

// for (let i = 0; i < colors.length; i += 1) {
//   console.log(colors[i]);

//   colors[i] = `${colors[i]}_x`;
// }

// console.log(colors);

// for (let color of colors) {
//   console.log(color);

//   // colors = `${color}_x`;
// }

// console.log(colors);

// q.7                     3
// function calculateTotal(number) {
//   let total = 0;
// //             4    <=   3 / false
//   for (let i = 1; i <= number; i += 1) {
//     total += i; // 3 + 3 = 6
//   }

//   return total; // 6
// }

// // console.log(calculateTotal(1)); // 1
// // console.log(calculateTotal(2)); // 3
// console.log(calculateTotal(3)); // 6
// // console.log(calculateTotal(4)); // 10

// q.8
// const clientsName = ['Pit', 'Nick', 'Tony'];
// clientsName.push(undefined);
// console.log(clientsName);

// const clientsName = ['Pit', 'Nick', 'Tony'];
// const str = clientsName.join('');
// console.log(str);
