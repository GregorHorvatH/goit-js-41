import { v4 as uuidv4 } from 'uuid';
import toastr from 'toastr';
import * as basicLightbox from 'basiclightbox';
import { fetchTodos, saveData } from './api';

const deleteModal = basicLightbox.create(`
<div class="delete-modal">
	<h1>Do you really want to delete this item?</h1>
	<p id="text">lorem ipsum</p>
  <button class="btn btn-light">Cancel</button>
  <button class="btn btn-danger">Delete</button>
</div>
`);

const loadingModal = basicLightbox.create(
  `
<div class="loading-modal">
  <p>please wait...</p>
</div>
`,
  { closable: false },
);

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '3000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

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
  addButtton: document.querySelector('.btn.btn-primary'),
  printButtton: document.querySelector('.btn.btn-success'),
  modalText: deleteModal.element().querySelector('#text'),
  modalCancelButton: deleteModal.element().querySelector('.btn-light'),
  modalDeleteButton: deleteModal.element().querySelector('.btn-danger'),
};
let todos = [];
let currentId;

function handleModalCancel() {
  deleteModal.close();
}

function handleModalDelete() {
  todos = todos.filter((todo) => todo.id !== currentId);
  deleteModal.close();

  loadingModal.show();
  saveData('todos', todos)
    .then(() => {
      toastr.warning('todo is successfully deleted');
    })
    .finally(() => {
      render();
      loadingModal.close();
    });
}

function render() {
  const items = todos.map((todo) => itemTemplate(todo));

  refs.listGroup.innerHTML = '';
  refs.listGroup.insertAdjacentHTML('beforeend', items.join(''));
}

function deleteItem(id) {
  const { label } = todos.find((todo) => todo.id === id);

  currentId = id;
  refs.modalText.textContent = label;
  deleteModal.show();
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

  loadingModal.show();
  saveData('todos', todos).finally(() => {
    render();
    loadingModal.close();
  });
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

function addTodo(value) {
  const newTodo = {
    // id: uuidv4(),
    label: value,
    checked: false,
  };

  toastr.success('todo is successfully created');

  return saveData('todos', newTodo).then((data) => {
    todos.push(data);
  });

  // return Promise.resolve();
}

function handleSubmit(e) {
  e.preventDefault();

  const { value } = e.target.elements.text;

  if (!value) return;

  addTodo(value)
    .then(() => refs.form.reset())
    .then(render);
}

function addEventListeners() {
  refs.listGroup.addEventListener('click', handleClick);
  refs.printButtton.addEventListener('click', print);
  refs.form.addEventListener('submit', handleSubmit);
  refs.modalCancelButton.addEventListener('click', handleModalCancel);
  refs.modalDeleteButton.addEventListener('click', handleModalDelete);
}

function start() {
  loadingModal.show();
  fetchTodos('todos')
    .then((data) => {
      todos = data;
      render();
    })
    .catch((errorMessage) => {
      toastr.error(errorMessage);
    })
    .finally(() => {
      addEventListeners();
      loadingModal.close();
    });
}

start();

// ======== program lifecycles =========
// - onLoad
// - onRender
