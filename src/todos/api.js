export function fetchTodos(key) {
  return fetch('http://localhost:3000/todos').then((response) =>
    response.json(),
  );

  // const delay = ~~(Math.random() * 3000);
  // console.log('load delay:', delay);

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     try {
  //       resolve(JSON.parse(localStorage.getItem(key)));
  //     } catch (e) {
  //       reject('error loading todos');
  //     }
  //   }, delay);
  // });
}

export function saveData(key, payload) {
  return fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json());

  // const delay = ~~(Math.random() * 3000);
  // console.log('load delay:', delay);

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     localStorage.setItem(key, JSON.stringify(payload));

  //     resolve();
  //   }, delay);
  // });
}
