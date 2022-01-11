import axios from 'axios';

const server1 = axios.create({
  baseURL: 'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1',
});

export function fetchTodos() {
  return server1.get(`/todos`).then((response) => response.data);
}

export function createTodo(payload) {
  return server1.post(`/todos`, payload).then((response) => response.data);
  // return fetch(`https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/todos`, {
  //   method: 'POST',
  //   headers: {},
  //   body: JSON.stringify(payload),
  // });
}

export function deleteTodo(id) {
  return server1.delete(`/todos/${id}`).then((response) => response.data);
}

export function updateTodo(id, payload) {
  return server1
    .patch(`/todos/${id}`, payload)
    .then((response) => response.data);
}
