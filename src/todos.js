import { v4 as uuidv4 } from 'uuid';

const itemTemplate = ({ id, label, checked }) =>
  `<li data-id=${id} class="list-group-item list-group-item-action">
    <label>
      <input type="checkbox" ${checked ? 'checked' : ''} />
      <span>${label}</span>
    </label>
    <button type="button" class="btn btn-danger">x</button>
  </li>`;

const refs = {
  form: document.querySelector('form'),
  listGroup: document.querySelector('ul.list-group'),
  printButtton: document.querySelector('.btn.btn-success'),
};
let todos = [
  { id: '1', label: 'Cras justo odio', checked: true },
  { id: '2', label: 'Cras justo odio', checked: false },
  { id: '3', label: 'Cras justo odio', checked: true },
  { id: '4', label: 'Cras justo odio', checked: false },
];

function render() {
  const items = todos.map((todo) => itemTemplate(todo));

  refs.listGroup.innerHTML = '';
  refs.listGroup.insertAdjacentHTML('beforeend', items.join(''));
}

function deleteItem(id) {
  todos = todos.filter((todo) => todo.id !== id);
}

function toggleItem(id) {
  todos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          checked: !todo.checked,
        }
      : todo,
  );
}

function handleClick(e) {
  const { id } = e.target.closest('li').dataset;

  switch (e.target.nodeName) {
    case 'BUTTON':
      deleteItem(id);
      break;

    case 'INPUT':
    case 'LABEL':
      toggleItem(id);
      break;
  }

  render();
}

function print() {
  console.table(todos);
}

function handleSubmit(e) {
  e.preventDefault();

  const { value } = e.target.elements.text;

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

refs.listGroup.addEventListener('click', handleClick);
refs.printButtton.addEventListener('click', print);
refs.form.addEventListener('submit', handleSubmit);

render();
