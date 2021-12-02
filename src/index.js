console.log('module 6.2');

// ===== question =====
// let value = 0;

// const refs = {
//   increment: document.getElementById('increment'),
//   decrement: document.getElementById('decrement'),
// };

// // +1, -1
// const changeValue = (step) => {
//   value = value + step;

//   console.log(value);
// };

// refs.decrement.addEventListener('click', () => changeValue(-1));
// refs.increment.addEventListener('click', () => changeValue(+1));

// ===== destructuring =====
// const obj = {
//   name: 'Bobby',
//   innerObj: {
//     age: 15,
//     sdfgsg: '3543545',
//   },
// };

// const fn = ({ name, innerObj: { age, sdfgsg } }) => {
//   console.log(name, age, sdfgsg);
// };

// fn(obj);

// ========= design MENU ========
// 1 - Left Click - show menu/hide menu (onBodyLeftClick)
// 2 - Right Click - show menu/hide menu (onBodyRightClick)
// 3 - Click - change body color scheme (onColorSelect)
// 4 - Input range - change body padding (onRangeChange)
// 5 - Input value - render Lorem's (onLoremCountChange)
// ======================================================
const loremTemplate = `<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nihil,
distinctio accusantium earum tempore exercitationem nobis molestias
laboriosam quia officiis? Provident rerum, explicabo laborum nemo sequi
temporibus blanditiis corporis culpa.
</p>`;

const refs = {
  menu: document.querySelector('ul.context-menu'),
  colorWhite: document.querySelector('li[data-color="white"]'),
  colorRed: document.querySelector('li[data-color="red"]'),
  colorGreen: document.querySelector('li[data-color="green"]'),
  colorBlue: document.querySelector('li[data-color="blue"]'),
  colorDark: document.querySelector('li[data-color="dark"]'),
  rangeInput: document.querySelector('#range input'),
  rangeValue: document.querySelector('#range input + span'),
  loremList: document.querySelector('#lorem-list'),
  loremCount: document.querySelector('#lorem-count input'),
};

const onDocumentLeftClick = (e) => {
  refs.menu.classList.toggle('show');
};

const onDocumentRightClick = (e) => {
  e.preventDefault();

  refs.menu.classList.toggle('show');
  refs.menu.style.left = `${e.x - 20}px`;
  refs.menu.style.top = `${e.y - 20}px`;
};

const onColorSelect = (e) => (document.body.className = e.target.dataset.color);

const onRangeChange = (e) => {
  const { value } = e.target;

  refs.rangeValue.textContent = `${value}px`;
  refs.loremList.style.padding = `${value}px`;
};

const onCountClick = (e) => {
  e.stopPropagation();
};

// https://fakerjsdocs.netlify.app/
const onCountChange = (e) => {
  const { value } = e.target;
  const arr = Array(Number(value))
    .fill('')
    .map(() => `<p>${faker.lorem.paragraphs(1)}</p>`);

  refs.loremList.innerHTML = '';
  refs.loremList.insertAdjacentHTML('beforeend', arr.join(''));
};

document.addEventListener('click', onDocumentLeftClick);
document.addEventListener('contextmenu', onDocumentRightClick);

refs.colorWhite.addEventListener('click', onColorSelect);
refs.colorRed.addEventListener('click', onColorSelect);
refs.colorGreen.addEventListener('click', onColorSelect);
refs.colorBlue.addEventListener('click', onColorSelect);
refs.colorDark.addEventListener('click', onColorSelect);
refs.rangeInput.addEventListener('input', onRangeChange);

refs.loremCount.addEventListener('click', onCountClick);
refs.loremCount.addEventListener('input', onCountChange);
