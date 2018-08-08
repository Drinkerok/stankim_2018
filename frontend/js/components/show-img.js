const imgWrapper = document.querySelector('.product__large-img-wrapper');
const largeImg = imgWrapper ? imgWrapper.querySelector('.product__large-img') : null;
const containers = document.querySelectorAll('.aside-gallery__list');
const loadingImg = document.createElement('img');

loadingImg.onload = () => {
  imgWrapper.classList.remove('product__large-img-wrapper--loading');
  largeImg.src = loadingImg.src;
}


Array.from(containers).forEach((item) => new ImgGroup(item));


function ImgGroup(container) {
  const links = container.querySelectorAll('.aside-gallery__link');
  let active = 0;

  Array.from(links).forEach((link, i) => {
    link.onclick = (e) => {
      e.preventDefault();
      if (i == active) return;

      imgWrapper.classList.add('product__large-img-wrapper--loading')
      links[active].classList.remove('aside-gallery__link--active');
      active = i;
      links[active].classList.add('aside-gallery__link--active');

      largeImg.src = 'img/loading.svg';
      loadingImg.src = link.href;
    }
  });
}