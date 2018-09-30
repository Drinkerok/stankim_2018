import {ajaxGet} from "./../components/ajax";


(function() {
  const news = document.querySelector(`.news`);
  if (!news) return;
  const button = news.querySelector(`.news__more-link`);
  if (!button) return;

  let counter = news.querySelectorAll(`.news-card`).length;


  const newsList = news.querySelector(`.news__list`);
  const url = button.href;

  const templateNews = createTemplate();


  button.addEventListener(`click`, function(e) {
    e.preventDefault();
    ajaxGet(`${url}?page=${counter}`, initResponse, console.log)
  });




  function createTemplate() {
    const li = document.createElement(`li`);
    li.classList.add(`news__item`);

    const a = document.createElement(`a`);
    a.classList.add(`news-card`);

    const imgWrapper = document.createElement(`div`);
    imgWrapper.classList.add(`news-card__img-wrapper`);

    const img = document.createElement(`img`);
    img.classList.add(`news-card__img`);
    imgWrapper.appendChild(img);
    a.appendChild(imgWrapper);

    const info = document.createElement(`div`);
    info.classList.add(`news-card__info`);

    const time = document.createElement(`time`);
    time.classList.add(`news-card__date`);

    const text = document.createElement(`p`);
    text.classList.add(`news-card__header`);
    info.appendChild(time);
    info.appendChild(text);
    a.appendChild(info);
    li.appendChild(a);

    return li;
  }
  function initResponse(response, ...data) {
    const news = response.data;
    if (!response.more) {
      button.parentNode.parentNode.removeChild(button.parentNode);
    }
    counter += news.length;

    news.forEach(item => newsList.appendChild(addNews(item)));
  }
  function addNews(item) {
    let template = templateNews.cloneNode(true);
    let link = template.querySelector(`.news-card`);
    let img = template.querySelector(`.news-card__img`);
    let time = template.querySelector(`.news-card__date`);
    let text = template.querySelector(`.news-card__header`);

    link.href = item.url || `#`;
    img.src = item.img || ``;
    img.alt = item.text || ``;
    time.textContent = item.time;
    text.textContent = item.text;

    return template;
  }
})();