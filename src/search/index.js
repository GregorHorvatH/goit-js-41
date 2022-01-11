import qs from 'query-string';

const HITS_PER_PAGE = 20;
const refs = {
  form: document.querySelector('.form'),
  listGroup: document.querySelector('.list-group'),
  loadMore: document.querySelector('.btn-success'),
};
let maxPage = 1;
let currentPage = 1;
let isLoading = false;

function clearList() {
  refs.listGroup.innerHTML = '';
}

function renderList(hits) {
  const items = hits.map(
    ({ title, story_title, url, story_url }) =>
      `<a href="${url ||
        story_url ||
        '#'}" class="list-group-item list-group-item-action">${title ||
        story_title}</a>`,
  );

  refs.listGroup.insertAdjacentHTML('beforeend', items.join(''));
}

function disableLoadMoreButton() {
  refs.loadMore.classList.add('disabled');
}

function enableLoadMoreButton() {
  refs.loadMore.classList.remove('disabled');
}

function renderControls() {
  if (currentPage === maxPage) {
    disableLoadMoreButton();
  } else {
    enableLoadMoreButton();
  }
}

// https://hn.algolia.com/api/
// https://hn.algolia.com/api/v1/search?query=biocomputer&hitsPerPage=5&page=0
function fetchNews() {
  const SEARCH_URL = 'https://hn.algolia.com/api/v1/search';
  const { value } = refs.form.elements.queryText;
  const params = {
    query: value,
    hitsPerPage: HITS_PER_PAGE,
    page: currentPage - 1,
  };
  const strParams = qs.stringify(params);

  if (!value) return;

  isLoading = true;
  disableLoadMoreButton();
  fetch(`${SEARCH_URL}?${strParams}`)
    .then((resp) => resp.json())
    .then(({ nbPages, page, hits }) => {
      maxPage = nbPages;
      currentPage = page + 1;

      renderList(hits);
      renderControls();
    })
    .finally(() => {
      isLoading = false;
    });
}

function handleSubmit(e) {
  e.preventDefault();

  maxPage = 1;
  currentPage = 1;

  clearList();
  setUrlParams(); // optional
  fetchNews();
}

function loadMore() {
  currentPage++;
  fetchNews();
}

function enableIntersectionObserver() {
  const options = {
    root: document.querySelector('.limited-heigh'),
    threshold: 1,
  };
  const handleObserver = ([item]) => {
    if (item.isIntersecting && !isLoading && currentPage < maxPage) {
      loadMore();
    }
  };
  const observer = new IntersectionObserver(handleObserver, options);

  observer.observe(refs.loadMore);
}

// function handleScroll() {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//   if (
//     !isLoading &&
//     scrollTop + clientHeight >= scrollHeight - 5 &&
//     currentPage < maxPage
//   ) {
//     loadMore();
//   }
// }

function addEventListeners() {
  refs.form.addEventListener('submit', handleSubmit);
  refs.loadMore.addEventListener('click', loadMore);

  // window.addEventListener('scroll', handleScroll);
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

function start() {
  addEventListeners();
  getUrlParams(); // optional
  fetchNews();
  enableIntersectionObserver();
}

start();
