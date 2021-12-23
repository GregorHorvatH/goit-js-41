export function fetchTodos(key) {
  const delay = ~~(Math.random() * 3000);
  console.log('load delay:', delay);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(JSON.parse(localStorage.getItem(key)));
      } catch (e) {
        reject('error loading todos');
      }
    }, delay);
  });
}

export function saveData(key, payload) {
  const delay = ~~(Math.random() * 3000);
  console.log('load delay:', delay);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(payload));

      resolve();
    }, delay);
  });
}
