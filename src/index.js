console.log('module 7.2');

// ============= basicLightbox =============
const instance = basicLightbox.create(`
<div class="modal">
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
  <img src="" />
  <button>Close</button>
</div>
`);

const refs = {
  button1: document.querySelector('#button-1'),
  button2: document.querySelector('#button-2'),
  image: instance.element().querySelector('img'),
  closeButton: instance.element().querySelector('button'),
};

function onButton1Click() {
  refs.image.src = 'https://picsum.photos/id/237/100/70';
  instance.show();
}

function onButton2Click() {
  refs.image.src = 'https://picsum.photos/id/238/100/70';
  instance.show();
}

function debounceWithCounter(callback, delay) {
  let id = 0;
  let count = 0;

  return function (e) {
    if (id) clearTimeout(id);

    count++;
    id = setTimeout(() => {
      callback(count);
      id = 0;
      count = 0;
    }, delay);
  };
}

function onImageClick(count) {
  if (count === 1) {
    instance.close();
  } else {
    console.log('zoom');
  }
}

refs.button1.addEventListener('click', onButton1Click);
refs.button2.addEventListener('click', onButton2Click);
refs.closeButton.addEventListener('click', instance.close);
refs.image.addEventListener('click', debounceWithCounter(onImageClick, 300));

// ============= throttle =============
// const refs = {
//   progress: document.querySelector('.progress'),
//   sections: document.querySelector('.sections'),
//   // input: document.querySelector('#input'),
// };

// refs.progress.value = refs.sections.clientHeight;
// refs.progress.max = refs.sections.scrollHeight;

// const handleScroll = (e) => {
//   refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;
//   console.log('scroll');
// };

// function throttle(callback, delay) {
//   let id = 0;

//   return function (e) {
//     if (id) return;

//     id = setTimeout(() => {
//       callback(e);
//       id = 0;
//     }, delay);
//   };
// }

// function debounce(callback, delay) {
//   let id = 0;

//   return function (e) {
//     if (id) clearTimeout(id);

//     id = setTimeout(() => {
//       callback(e);
//       id = 0;
//     }, delay);
//   };
// }

// // refs.sections.addEventListener('scroll', throttle(handleScroll, 500));
// refs.sections.addEventListener('scroll', debounce(handleScroll, 500));
