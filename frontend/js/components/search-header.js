let body = document.body || document.querySelector('body');
let button = body.querySelector('.search-toggle');
let form = body.querySelector('.search-form');

button.onclick = function(e) {
  e.preventDefault();
  body.classList.toggle('search-open');
}