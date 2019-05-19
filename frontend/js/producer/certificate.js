import {popupActions} from './../components/popup';
import {setNewImg} from "./../components/common";

(function() {
  const certificateEl = document.querySelector(`.certificate`);
  const popupEl = document.querySelector(`.popup-img`);

  if (!certificateEl || !popupEl) return;
  const linkEl = certificateEl.querySelector(`.certificate__link`);

  const imgEl = popupEl.querySelector(`.popup-img__img`);
  const descriptionEl = popupEl.querySelector(`.popup-img__description`);


  linkEl.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    setNewImg({
      imgEl,
      descriptionEl,
      link: linkEl.href,
      description: linkEl.getAttribute(`data-alt`) || ``
    });

    popupActions.open(popupEl, closePopup);
  });


  function closePopup() {
    imgEl.src = ``;
    descriptionEl.textContent = ``;
  }
})();