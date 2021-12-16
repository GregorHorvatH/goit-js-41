export function loadData(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    toastr.error('error loading todos');
    return [];
  }
}

export function saveData(key, payload) {
  localStorage.setItem(key, JSON.stringify(payload));
}
