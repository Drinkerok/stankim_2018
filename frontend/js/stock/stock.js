// import {clickInsideElement} from "./common";

(function() {
  let stock = document.querySelector(`.stock`);
  if (!stock) return;

  stock.classList.remove(`no-js`);

  let list = stock.querySelector(`.stock__list`);
  list.addEventListener(`click`, function(e) {
    const target = e.target.classList.contains(`stock__link`) ? e.target : e.target.closest(`.stock__link`);

    if (!target) return;

    e.preventDefault();
    target.classList.toggle(`stock__link--open`);
  });
})();