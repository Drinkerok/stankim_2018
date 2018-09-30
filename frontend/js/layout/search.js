const headerEl = document.querySelector(`.page-header`);
const buttonEl = document.querySelector(`.search-button`);
const textEl = buttonEl.querySelector(`span`);
const inputEl = document.querySelector(`.search-form__input`);

function isOpen() {
  return headerEl.classList.contains(`search-open`);
}

buttonEl.onclick = () => {
  if (!isOpen()) {
    headerEl.classList.add(`search-open`);
    inputEl.focus();
    textEl.textContent = `Закрыть поиск`;
    headerEl.classList.remove(`menu-open`);
  } else {
    headerEl.classList.remove(`search-open`);
    textEl.textContent = `Открыть поиск`;
  }
}