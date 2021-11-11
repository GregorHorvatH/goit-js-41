console.log('module 4.2');

// const arr = [1, 2, 3];
// arr[0] = 5;
// arr[1] = 6;
// arr[2] = 7;

// console.log(arr);

// ==== extended redude ====
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const sumOfTweets = (acc, item) => {
//   return acc + item.likes;
// };

// console.log(tweets.reduce(sumOfTweets, 0));

// const flatTagsTogether = (acc, { tags }) => [...acc, ...tags]; // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs']

// const countValues = (acc, item) => ({
//   ...acc,
//   [item]: acc[item] ? acc[item] + 1 : 1,
// });

// const result = tweets.reduce(flatTagsTogether, []).reduce(countValues, {});

// console.log(result);

// ==== pure function ====
// let c = 1;

// function sum(a, b) {
//   c = a + b;
//   return c;
// }

// console.log('c:', c);

// console.log(sum(1, 1)); // 2

// console.log('c:', c); // ? 2

// ==== pure function 2 ====
// const numbers = [1, 1, 1];

// function multiple2(arr) {
//   // arr.forEach((value, idx) => {
//   //   arr[idx] *= 2;
//   // });

//   // return arr;
//   return arr.map((item) => item * 2);
// }

// console.log(multiple2(numbers)); // [2,2,2]
// console.log(multiple2(numbers)); // [2,2,2]
// console.log(multiple2(numbers)); // [2,2,2]
// console.log(multiple2(numbers)); // [2,2,2]
// console.log(numbers); // [1,1,1]

// ===== array flat =====
// const arrInArr = [2, 7, 3, [10, 4, [12, 34, 65], 8], 14, 6];
// console.log(arrInArr.flat(3));

// ===== piramide =====
//          2
//       55  7
//      3  4  5
//    2  7  1  9
//  11 44 22 78 11
// 12 34 56 78 23 15
