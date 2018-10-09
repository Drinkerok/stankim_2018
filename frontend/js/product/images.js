import {setNewImg} from "./../components/common";


(function() {
  const imgWrapperEl = document.querySelector(`.product__large-img`);

  if (!imgWrapperEl) return;

  const imgEl = imgWrapperEl.querySelector(`.product__img`);
  const descriptionEl = imgWrapperEl.querySelector(`.product__img-description`);
  const galleryEl = document.querySelector(`.gallery--photo`);
  let activeEl = galleryEl.querySelector(`.gallery__link--active`);


  galleryEl.addEventListener(`click`, (evt) => {
    const target = evt.target.classList.contains(`gallery__link`) ? evt.target : evt.target.closest(`.gallery__link`);

    if (!target) return;

    evt.preventDefault();
    if (target === activeEl) return;

    if (activeEl) {
      activeEl.classList.remove(`gallery__link--active`);
    }
    activeEl = target;
    activeEl.classList.add(`gallery__link--active`);

    setNewImg({
      imgEl,
      descriptionEl,
      link: target.href,
      description: target.getAttribute(`data-alt`) || ``
    });
  });
})();