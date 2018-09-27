import {popupActions} from './../components/popup';
import {setNewImg} from "./../components/common";


(function() {
  const previewBlock = document.querySelector(`.producer__additional-block--photo .gallery__list`);
  const popupEl = document.querySelector(`.popup-img`);
  if (!previewBlock || !popupEl) return;

  const previewEls = Array.from(previewBlock.querySelectorAll(`.gallery__link`));
  const imgEl = popupEl.querySelector(`.popup-img__img`);
  const descriptionEl = popupEl.querySelector(`.popup-img__description`);


  previewBlock.addEventListener(`click`, (evt) => {
    const target = evt.target.classList.contains(`gallery__link`) ? evt.target : evt.target.closest(`.gallery__link`);

    if (!target) return;
    evt.preventDefault();

    setNewImg({
      imgEl,
      descriptionEl,
      link: target.href,
      description: target.getAttribute(`data-alt`) || `1111`
    });

    popupActions.open(popupEl, closePopup);
  });


  function closePopup() {
    imgEl.src = ``;
    descriptionEl.textContent = ``;
  }
})();