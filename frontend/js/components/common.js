export function clickInsideElement(e, elClass) {
  let target = e.target;

  function checkElement(elem) {
    if (elem.classList && elem.classList.contains(elClass)) {
      return elem;
    }

    if (elem.parentNode) {
      return checkElement(elem.parentNode);
    }

    return false;
  }

  return checkElement(target);
}



export function ajaxGet(link, onLoad, onError) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    switch (xhr.status) {
      case 200:
        onLoad(xhr.response);
        break;

      default:
        onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Что-то пошло не так');
  });

  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });


  xhr.open('GET', link);
  xhr.send();
};



export function ajaxPost(link, onLoad, onError) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    switch (xhr.status) {
      case 200:
        onLoad(xhr.response);
        break;

      default:
        onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Что-то пошло не так');
  });

  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });


  xhr.open('GET', link);
  xhr.send();
}