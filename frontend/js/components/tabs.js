(function() {
  let block = document.querySelector('.tabs');
  if (!block) return;

  const linkActiveClass = 'tabs__link--active';
  const contentActiveClass = 'tabs__content-item--active';

  let links = block.querySelectorAll('.tabs__link');
  let items = block.querySelectorAll('.tabs__content-item');
  let active = 0;

  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.onclick = function(e) {
      e.preventDefault();
      if (active != i) changeAtive(i);
    };
  }


  function changeAtive(number) {
    links[active].classList.remove(linkActiveClass);
    items[active].classList.remove(contentActiveClass);

    active = number;
    links[active].classList.add(linkActiveClass);
    items[active].classList.add(contentActiveClass);
  }
})();