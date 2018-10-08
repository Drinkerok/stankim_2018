const headerEl = document.querySelector(`.page-header`);
const buttonEl = document.querySelector(`.menu-button`);

const TABLET_WIDTH = 768;

function isOpen() {
  return headerEl.classList.contains(`menu-open`);
}


buttonEl.onclick = () => {
  if (!isOpen()) {
    headerEl.classList.add(`menu-open`);
    headerEl.classList.remove(`search-open`);
  } else {
    headerEl.classList.remove(`menu-open`);
  }
}



const menuEl = document.querySelector(`.page-header .main-navigation`);
menuEl.addEventListener(`click`, (evt) => {
  if (document.documentElement.clientWidth >= TABLET_WIDTH) return;

  const target = evt.target.classList.contains(`main-navigation__link--dropdown`) ? evt.target : evt.target.closest(`.main-navigation__link--dropdown`);

  if (!target) return;

  evt.preventDefault();
  target.classList.toggle(`main-navigation__link--open`);
})