import InfiniteScroll from 'infinite-scroll';
import qs from 'query-string';

const refs = {
  form: document.querySelector('.form'),
  listGroup: document.querySelector('.list-group'),
  // pages: document.querySelector('.pages'),
  // prevPage: document.querySelector('a[data-page="prev"]'),
  // nextPage: document.querySelector('a[data-page="next"]'),
  loadMore: document.querySelector('.btn-success'),
};
let maxPage = 1;
let currentPage = 1;

function renderList(hits) {
  const items = hits.map(
    ({ title, story_title, url, story_url }) =>
      `<a href="${url ||
        story_url ||
        '#'}" class="list-group-item list-group-item-action">${title ||
        story_title}</a>`,
  );

  // refs.listGroup.innerHTML = '';
  refs.listGroup.insertAdjacentHTML('beforeend', items.join(''));
}

// https://hn.algolia.com/api/
// https://hn.algolia.com/api/v1/search?query=biocomputer&hitsPerPage=5&page=0
function fetchNews() {
  const SEARCH_URL = 'https://hn.algolia.com/api/v1/search';
  const { value } = refs.form.elements.queryText;
  const params = {
    query: value,
    hitsPerPage: 5,
    page: currentPage - 1,
  };
  const strParams = qs.stringify(params);

  if (!value) return;

  fetch(`${SEARCH_URL}?${strParams}`)
    .then((resp) => resp.json())
    .then(({ nbPages, page, hits }) => {
      maxPage = nbPages;
      currentPage = page + 1;

      renderList(hits);
      // renderPagination();
    });
}

function handleSubmit(e) {
  e.preventDefault();
  setUrlParams(); // optional
  fetchNews();
}

// function handleClickPrevPage(e) {
//   e.preventDefault();

//   if (currentPage > 1) {
//     currentPage--;
//     fetchNews();
//   }
// }

// function handleClickNextPage(e) {
//   e.preventDefault();

//   if (currentPage < maxPage) {
//     currentPage++;
//     fetchNews();
//   }
// }

// function handleClickPage(e) {
//   const { page } = e.target.dataset;

//   e.preventDefault();
//   currentPage = page;
//   fetchNews();
// }

function handleClickLoadMore() {
  currentPage++;
  fetchNews();
}

function addEventListeners() {
  refs.form.addEventListener('submit', handleSubmit);
  // refs.prevPage.addEventListener('click', handleClickPrevPage);
  // refs.nextPage.addEventListener('click', handleClickNextPage);
  // refs.pages.addEventListener('click', handleClickPage);
  refs.loadMore.addEventListener('click', handleClickLoadMore);
}

// optional
function getUrlParams() {
  const { query = '' } = qs.parse(window.location.search);

  refs.form.elements.queryText.value = query;
}

// optional
function setUrlParams() {
  const { value } = refs.form.elements.queryText;

  window.history.pushState('', '', `${window.location.origin}\?query=${value}`);
}

// function renderPagination() {
//   const items = [];

//   for (let i = 1; i <= maxPage; i += 1) {
//     items.push(
//       `<li class="page-item ${
//         i === currentPage ? 'active' : ''
//       }"><a class="page-link" href="#" data-page=${i}>${i}</a></li>`,
//     );
//   }

//   if (currentPage === 1) {
//     refs.prevPage.closest('li').classList.add('disabled');
//   } else {
//     refs.prevPage.closest('li').classList.remove('disabled');
//   }

//   if (currentPage === maxPage) {
//     refs.nextPage.closest('li').classList.add('disabled');
//   } else {
//     refs.nextPage.closest('li').classList.remove('disabled');
//   }

//   refs.pages.innerHTML = '';
//   refs.pages.insertAdjacentHTML('beforeend', items.join(''));
// }

function start() {
  addEventListeners();
  getUrlParams(); // optional
  fetchNews();
}

start();
