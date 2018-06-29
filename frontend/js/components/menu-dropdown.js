let menuList = document.querySelector('.main-navigation__list');

menuList.addEventListener('click', function(e) {
  if (e.target.classList.contains('main-navigation__link--dropdown')) {
    e.preventDefault();
    toggleOpen(e.target)
  }
});

function toggleOpen(link) {
  link.classList.toggle('main-navigation__link--open');
}