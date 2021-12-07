console.log('module 7.1');

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();

// ========= design MENU ========
// 1 - Left Click - show menu/hide menu (onBodyLeftClick)
// 2 - Right Click - show menu/hide menu (onBodyRightClick)
// 3 - Click - change body color scheme (onColorSelect)
// 4 - Input range - change body padding (onRangeChange)
// 5 - Input value - render Lorem's (onLoremCountChange)
// ======================================================
const refs = {
  buttonWrapper: document.querySelector('#buton-wrapper'),
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
  refs.menu.classList.remove('show');
};

const onDocumentRightClick = (e) => {
  e.preventDefault();

  refs.menu.classList.add('show');
  refs.menu.style.left = `${e.x - 20}px`;
  refs.menu.style.top = `${e.y - 20}px`;
};

const onColorSelect = (e) => {
  if (e.target === e.currentTarget) return;

  document.body.className = e.target.dataset.color;
};

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
// document.addEventListener('contextmenu', onDocumentRightClick, { once: true });
document.addEventListener('contextmenu', onDocumentRightClick);

refs.buttonWrapper.addEventListener('click', onColorSelect);

// refs.colorWhite.addEventListener('click', onColorSelect);
// refs.colorRed.addEventListener('click', onColorSelect);
// refs.colorGreen.addEventListener('click', onColorSelect);
// refs.colorBlue.addEventListener('click', onColorSelect);
// refs.colorDark.addEventListener('click', onColorSelect);

refs.rangeInput.addEventListener('input', onRangeChange);

refs.loremCount.addEventListener('click', onCountClick);
refs.loremCount.addEventListener('input', onCountChange);

// ====== question ======
// function onParentClick(event) {
//   console.log(`onParentClick -> event.target`, event.target);
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 100000)
//     .toString(16)
//     .padStart(5, '0');
// }

// console.log(getRandomHex());
// console.log(getRandomHex());
// console.log(getRandomHex());
// console.log(getRandomHex());
// console.log(getRandomHex());
// console.log(getRandomHex());

// 3 system
// 0 - 000
// 1 - 001
// 2 - 002
// 3 - 010
// 4 - 011
// 5 - 012
// 6 - 020
// 7 - 021
// 8 - 022
// 9 - 100

// ========= question 2 ==========
// const e = {
//   target: {
//     value: 5,
//   },
// };

// const { value } = e.target;

// console.log('value:', value);

// ======================
// new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
//   captionType: "alt",
//   scrollZoomFactor: 0.5,
//   captionPosition: "bottom",
// });
