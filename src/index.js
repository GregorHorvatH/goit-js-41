import 'bootstrap';

import 'bootstrap/scss/bootstrap.scss';
import 'toastr/build/toastr.min.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import './style.css';

// import './search';
// import './todos';

console.log('module 11.2');

// ======= async/await =======
// const getUsersByName = (userName) =>
//   fetch(`http://localhost:8080/users?name=${userName}`).then((resp) =>
//     resp.json(),
//   );

// const getAccountsByUserId = (userId) =>
//   fetch(`http://localhost:8080/accounts?userId=${userId}`).then((resp) =>
//     resp.json(),
//   );

// const getAccountsByUserName = (userName) => {
//   getUsersByName(userName).then(([user]) => {
//     getAccountsByUserId(user.id)
//       .then((accounts) =>
//         accounts.map((account) => ({
//           userName: user.name,
//           ...account,
//         })),
//       )
//       .then(console.table);
//   });
// };

// const getAccountsByUserName = async (userName) => {
//   const [user] = await getUsersByName(userName);
//   const accounts = await getAccountsByUserId(user.id);
//   const accountsWithUserName = accounts.map((account) => ({
//     userName: user.name,
//     ...account,
//   }));

//   console.table(accountsWithUserName);
// };

// getAccountsByUserName('Bobby');
// getAccountsByUserName('Peter');

// ========== promise.all ==========
// const getUsers = () =>
//   fetch(`http://localhost:808/users`).then((resp) => resp.json());

// const getAccounts = () =>
//   fetch(`http://localhost:8080/accounts`).then((resp) => resp.json());

// const mergeAccountsWithUsers = (accounts, users) =>
//   accounts.map((account) => ({
//     userName: users.find((user) => user.id === account.userId).name,
//     ...account,
//   }));

// v.1
// const getAccountsWithuserName = async () => {
//   try {
//     const [users, accounts] = await Promise.all([getUsers(), getAccounts()]);
//     const accountsWithUserName = mergeAccountsWithUsers(accounts, users);

//     console.table(accountsWithUserName);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// v.2
// const getAccountsWithuserName = async () => {
//   const [users, accounts] = await Promise.allSettled([
//     getUsers(),
//     getAccounts(),
//   ]);

//   console.log(users.value || []);
//   console.log(accounts.value);
// };

// getAccountsWithuserName();

// ======= history ======
// ======= location =====
