import {popupActions} from './popup';

const imgWrapper = document.querySelector('.product__large-img-wrapper');
const largeImg = imgWrapper ? imgWrapper.querySelector('.product__large-img') : document.querySelector('.popup-img__img');
const containers = document.querySelectorAll('.aside-gallery__list');
const loadingImg = document.createElement('img');


loadingImg.onload = () => {
  largeImg.src = loadingImg.src;

  if (imgWrapper) {
    imgWrapper.classList.remove('product__large-img-wrapper--loading');
  } else {
    popupActions.open(document.querySelector('.popup-img'));
  }
}


Array.from(containers).forEach((item) => new ImgGroup(item));


function ImgGroup(container) {
  const links = Array.from(container.querySelectorAll('.aside-gallery__link')).filter((link) => !link.classList.contains('aside-gallery__link--video'));
  let active = container.querySelector('.aside-gallery__link--active') ? 0 : null;

  links.forEach((link, i) => {
    link.onclick = (e) => {
      e.preventDefault();
      if (active && i == active) return;

      if (imgWrapper) {
        imgWrapper.classList.add('product__large-img-wrapper--loading');
      } else {
        document.querySelector('.popup-img__description').textContent = link.getAttribute('data-description') || '';
        popupActions.open(document.querySelector('.popup-img'));
      }
      if (active || active === 0) {
        links[active].classList.remove('aside-gallery__link--active');
        active = i;
        links[active].classList.add('aside-gallery__link--active');
      }

      largeImg.src = 'img/loading.svg';
      loadingImg.src = link.href;
    }
  });
}