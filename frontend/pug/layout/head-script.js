(function () {
  function addStyle() {
    var style = document.createElement('style');
    style.rel = 'stylesheet';
    document.head.appendChild(style);
    style.textContent = localStorage.styles;
  }

  try {
    if (localStorage.styles && localStorage.styles_hash == '111110.10.2018') {
    addStyle();
    } else {
    var request = new XMLHttpRequest();

    request.open('GET', '/css/styles.css', true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
      localStorage.styles = request.responseText;
      localStorage.styles_hash = '10.10.2018';
      addStyle();
      }
    };
    request.send();
    }
  } catch (ex) {
  }
})();


// загрузка svg спрайта и сохранение в local.storage
(function(window, document) {
  'use strict';
  var file = 'svg/sprite.svg', // путь к файлу спрайта на сервере
      revision = 1;            // версия спрайта
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
    request,
    data,
    insertIT = function() {
      document.body.insertAdjacentHTML('afterbegin', data);
    },
    insert = function() {
      if (document.body) insertIT();
      else document.addEventListener('DOMContentLoaded', insertIT);
    };
  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision-1) {
    data = localStorage.getItem('inlineSVGdata');
    if (data) {
      insert();
      return true;
    }
  }
  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();
        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    }
    request.send();
  } catch (e) {}
}(window, document));