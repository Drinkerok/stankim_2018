let body = document.body || document.querySelector('body');
let button = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');

let opened = false;

button.addEventListener('click', function(e) {
  e.preventDefault();
  if (!opened) {
    open();
  } else {
    close();
  }
});

function open() {
  body.classList.add('menu-open');
  window.addEventListener('keydown', closeByEsc);
  opened = !opened;
}
function close() {
  body.classList.remove('menu-open');
  window.removeEventListener('keydown', closeByEsc);
  opened = !opened;
}
function closeByEsc(e) {
  if (e.keyCode == 27) close();
}

menu.addEventListener('click', function(e) {
  if (e.target === menu) close();
});