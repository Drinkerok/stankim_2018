// import { tns } from "tiny-slider/src/tiny-slider.module";
import { tns } from "tiny-slider/src/tiny-slider";

(function() {
  let block = document.querySelector('.gallery');
  if (!block) return;

  let list = block.querySelector('.gallery__list');
  let controls = block.querySelector('.slider-controls');

  block.classList.remove('no-js');

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


  let imgWrapper = block.querySelector('.gallery__img-wrapper');
  let imgLarge = imgWrapper.querySelector('.gallery__img');
  let links = block.querySelectorAll('.gallery__link');
  let activeLink = block.querySelector('.gallery__link--active');
  let counter = block.querySelector('.gallery__current');

  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', function(e) {
      e.preventDefault();

      if (this == activeLink) return;

      imgLarge.src = link.href;
      activeLink.classList.remove('gallery__link--active');
      activeLink = this;
      activeLink.classList.add('gallery__link--active');

      let coords = imgWrapper.getBoundingClientRect();
      window.scrollBy(0, coords.top);

      counter.textContent = i + 1;
    });
  }
})();