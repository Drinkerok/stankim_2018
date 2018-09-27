(function() {
  const block = document.querySelector(`.tabs`);
  if (!block) return;

  const linkActiveClass = `tabs__link--active`;
  const contentActiveClass = `tabs__content-item--active`;

  const linksListEl = block.querySelector(`.tabs__list`);
  const linksEls = Array.from(linksListEl.querySelectorAll(`.tabs__link`));
  const itemsEls = Array.from(block.querySelectorAll(`.tabs__content-item`));
  let active = 0;


  linksListEl.addEventListener(`click`, (evt) => {
    const target = evt.target;

    if (!target.classList.contains(`tabs__link`)) return;

    evt.preventDefault();
    const targetNumber = linksEls.indexOf(target);
    if (targetNumber === active) return;

    linksEls[active].classList.remove(linkActiveClass);
    itemsEls[active].classList.remove(contentActiveClass);

    active = targetNumber;

    linksEls[active].classList.add(linkActiveClass);
    itemsEls[active].classList.add(contentActiveClass);
  });
})();