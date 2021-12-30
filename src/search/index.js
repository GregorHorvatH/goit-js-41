const refs = {
  form: document.querySelector('.form'),
  listGroup: document.querySelector('.list-group'),
  pages: document.querySelector('.pages'),
  prevPage: document.querySelector('a[data-page="prev"]'),
  nextPage: document.querySelector('a[data-page="next"]'),
};
let maxPage = 1;
let currentPage = 1;

function renderList(hits) {
  const items = [];

  // TODO: generate list here

  refs.listGroup.innerHTML = '';
  refs.listGroup.insertAdjacentHTML('beforeend', items.join(''));
}

// https://hn.algolia.com/api/
// https://hn.algolia.com/api/v1/search?query=biocomputer&hitsPerPage=5&page=0
function fetchNews() {
  const SEARCH_URL = 'https://hn.algolia.com/api/v1/search';

  console.log('fetch news:', SEARCH_URL);
}

function handleSubmit(e) {
  e.preventDefault();
  // setUrlParams();
  // fetchNews();
}

function handleClickPrevPage(e) {
  e.preventDefault();

  if (currentPage > 1) {
    currentPage--;
    fetchNews();
  }
}

function handleClickNextPage(e) {
  e.preventDefault();

  if (currentPage < maxPage) {
    currentPage++;
    fetchNews();
  }
}

function handleClickPage(e) {
  const { page } = e.target.dataset;

  e.preventDefault();
  currentPage = page;
  fetchNews();
}

function addEventListeners() {
  refs.form.addEventListener('submit', handleSubmit);
  refs.prevPage.addEventListener('click', handleClickPrevPage);
  refs.nextPage.addEventListener('click', handleClickNextPage);
  refs.pages.addEventListener('click', handleClickPage);
}

function getUrlParams() {
  // TODO: code here
}

function setUrlParams() {
  // TODO: code here
}

function renderPagination() {
  const items = [];

  // TODO: generate items here

  refs.pages.innerHTML = '';
  refs.pages.insertAdjacentHTML('beforeend', items.join(''));
}

function start() {
  addEventListeners();
  // getUrlParams(); // optional
  // fetchNews();
}

start();
