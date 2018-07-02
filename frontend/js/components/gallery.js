import { tns } from "tiny-slider/src/tiny-slider.module";

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
      1240: {
        items: 10,
      }
    },
  })
})();