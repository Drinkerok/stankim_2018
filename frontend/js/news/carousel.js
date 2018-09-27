import {tns} from "tiny-slider/src/tiny-slider";

function setNewImg({imgEl, descriptionEl, link, description}) {
  descriptionEl.textContent = `Загрузка...`;
  imgEl.src = ``;

  const newImg = document.createElement(`img`);
  newImg.onload = () => {
    imgEl.src = link;
    descriptionEl.textContent = description;
  };
  newImg.src = link;
}

(function() {
  const block = document.querySelector(`.carousel`);
  if (!block) return;

  const list = block.querySelector(`.carousel__previews-list`);
  const controls = block.querySelector(`.slider-controls`);


  tns({
    container: list,
    items: 3,
    slideBy: 1,
    autoplay: false,
    mouseDrag: false,
    controls: true,
    controlsContainer: controls,
    nav: false,
    speed: 300,
    loop: false,
    gutter: 0,
    responsive: {
      768: {
        items: 8,
      },
      999: {
        items: 10,
      }
    },
  });


  const imgEl = block.querySelector(`.carousel__img`);
  const descriptionEl = block.querySelector(`.carousel__img-description`);
  const counterEl = block.querySelector(`.carousel__current`);
  const previewWrapperEl = block.querySelector(`.carousel__previews-wrapper`);
  const previewsEls = previewWrapperEl.querySelectorAll(`.carousel__previews-item`);
  let activePreview = block.querySelector(`.carousel__previews-link--active`);

  setNewImg({
    imgEl,
    descriptionEl,
    link: activePreview.href,
    description: activePreview.getAttribute(`data-alt`)
  });

  previewWrapperEl.addEventListener(`click`, (evt) => {
    const target = evt.target.classList.contains(`carousel__previews-link`) ? evt.target : evt.target.closest(`.carousel__previews-link`);
    
    if (!target) return;

    evt.preventDefault();
    if (target === activePreview) return;

    activePreview.classList.remove(`carousel__previews-link--active`);
    activePreview = target;
    activePreview.classList.add(`carousel__previews-link--active`);

    // const coords = imgEl.getBoundingClientRect();
    // window.scrollBy(0, coords.top);

    setNewImg({
      imgEl,
      descriptionEl,
      link: target.href,
      description: target.getAttribute(`data-alt`)
    });

    const previewItemNumber = target.parentNode.id.slice(`tns1-item`.length);
    counterEl.textContent = +previewItemNumber + 1;
  })
})();