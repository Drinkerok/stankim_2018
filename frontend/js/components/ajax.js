const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  throw new Error(`${response.status}: ${response.statusText}`);
};
const toJSON = (res) => res.json();

export function ajaxGet(link, onLoad, onError, ...data) {
  const requestSettings = {
    headers: {
      'Content-Type': `application/json`
    },
    method: `GET`
  };
  fetch(link, requestSettings)
    .then(checkStatus)
    .then(toJSON)
    .then((response) => onLoad(response, data))
    .catch((err) => onError('Cтатус ответа: : ' + err.status + ' ' + err.statusText));
  // const xhr = new XMLHttpRequest();
  // xhr.responseType = 'json';

  // xhr.addEventListener('load', function () {
  //   switch (xhr.status) {
  //     case 200:
  //       onLoad(xhr.response, data);
  //       break;

  //     default:
  //       onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
  //   }
  // });

  // xhr.addEventListener('error', function () {
  //   onError('Что-то пошло не так');
  // });

  // xhr.addEventListener('timeout', function () {
  //   onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  // });


  // xhr.open('GET', link);
  // xhr.send();
};



export function ajaxPost(link, onLoad, onError, data) {
  const requestSettings = {
    body: data,
    method: `POST`
  };
  fetch(link, requestSettings)
    .then(checkStatus)
    .then(toJSON)
    .then((response) => onLoad(response, data))
    .catch((err) => onError('Cтатус ответа: : ' + err.status + ' ' + err.statusText));
  // const xhr = new XMLHttpRequest();
  // xhr.responseType = 'json';

  // xhr.addEventListener('load', function () {
  //   switch (xhr.status) {
  //     case 200:
  //       onLoad(xhr.response);
  //       break;

  //     default:
  //       onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
  //   }
  // });

  // xhr.addEventListener('error', function () {
  //   onError('Что-то пошло не так');
  // });

  // xhr.addEventListener('timeout', function () {
  //   onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  // });


  // xhr.open('POST', link);
  // xhr.send(data);
}