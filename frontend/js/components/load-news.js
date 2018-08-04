import {ajaxGet} from "./common";

(function() {
  let news = document.querySelector('.news');
  if (!news) return;
  let button = news.querySelector('.news__link');
  if (!button) return;


  let newsList = news.querySelector('.news__list');
  let link = button.getAttribute('data-url');

  let templateNews = createTemplate();

  button.classList.remove('news__link--no-js');


  button.addEventListener('click', function(e) {
    e.preventDefault();
    ajaxGet(link, initResponse, console.log)
  });




  function createTemplate() {
    let li = document.createElement('li');
    li.classList.add('news__item');

    let a = document.createElement('a');
    a.classList.add('news-card');

    let imgWrapper = document.createElement('div');
    imgWrapper.classList.add('news-card__img-wrapper');

    let img = document.createElement('img');
    img.classList.add('news-card__img');
    imgWrapper.appendChild(img);
    a.appendChild(imgWrapper);

    let info = document.createElement('div');
    info.classList.add('news-card__info');

    let time = document.createElement('time');
    time.classList.add('news-card__date');

    let text = document.createElement('p');
    text.classList.add('news-card__header');
    info.appendChild(time);
    info.appendChild(text);
    a.appendChild(info);
    li.appendChild(a);

    return li;
  }
  function initResponse(response) {
    let news = response.data;
    if (!response.more) button.parentNode.classList.add('news__link-wrapper--hidden');

    for (let i = 0; i < news.length; i++) {
      let item = news[i];

      newsList.appendChild(addNews(item));
    }
  }
  function addNews(item) {
    let template = templateNews.cloneNode(true);
    let link = template.querySelector('.news-card');
    let img = template.querySelector('.news-card__img');
    let time = template.querySelector('.news-card__date');
    let text = template.querySelector('.news-card__header');

    link.href = item.href || '#';
    img.src = item.img || '';
    img.alt = item.text || '';
    time.textContent = item.time;
    text.textContent = item.text;

    return template;
  }
})();