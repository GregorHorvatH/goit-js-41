import { v4 as uuidv4 } from 'uuid';
import './style.css';

// ===== todos =====
const itemTemplate = ({ id, label, checked }) =>
  `<li data-id=${id} class="list-group-item list-group-item-action">
    <label>
      <input type="checkbox" ${checked ? 'checked' : ''} />
      <span>${label}</span>
    </label>
    <button type="button" class="btn btn-danger">x</button>
  </li>`;

const refs = {
  listGroup: document.querySelector('.list-group'),
  form: document.querySelector('form'),
  print: document.querySelector('.btn.btn-success'),
};
let todos = [
  { id: 1, label: 'Cras justo odio', checked: true },
  { id: 2, label: 'Dapibus ac facilisis in', checked: false },
  { id: 3, label: 'Morbi leo risus', checked: false },
];

function render() {
  const items = todos.map((todo) => itemTemplate(todo));

  refs.listGroup.innerHTML = '';
  refs.listGroup.insertAdjacentHTML('beforeend', items.join(''));
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id != id);
}

function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id == id
      ? {
          ...todo,
          checked: !todo.checked,
        }
      : todo
  );
}

function handleClick(e) {
  const { id } = e.target.closest('li').dataset;

  switch (e.target.nodeName) {
    case 'BUTTON':
      deleteTodo(id);
      break;

    case 'INPUT':
    case 'SPAN':
    case 'LABEL':
      toggleTodo(id);
      break;
  }

  render();
}

function handleSubmit(e) {
  const { value } = e.target.elements.text;

  e.preventDefault();

  if (!value) return;

  const newTodo = {
    id: uuidv4(),
    label: value,
    checked: false,
  };

  todos.push(newTodo);
  refs.form.reset();
  render();
}

function print() {
  console.table(todos);
}

refs.listGroup.addEventListener('click', handleClick);
refs.form.addEventListener('submit', handleSubmit);
refs.print.addEventListener('click', print);

render();
