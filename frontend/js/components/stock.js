import {clickInsideElement} from "./common";

(function() {
  let stock = document.querySelector('.stock');
  if (!stock) return;

  let list = stock.querySelector('.stock__list');
  list.addEventListener('click', function(e) {
    let link = clickInsideElement(e, 'stock__link');

    if (!link) return;

    e.preventDefault();
    link.classList.toggle('stock__link--open');
  });
})();