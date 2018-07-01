import { tns } from "tiny-slider/src/tiny-slider.module";

(function() {
  let block = document.querySelector('.special-offers');
  if (!block) return;

  let list = block.querySelector('.special-offers__list');
  let controls = block.querySelector('.slider-controls');

  block.classList.remove('no-js');

  tns({
    container: list,
    items: 1,
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
        items: 3,
        slideBy: 3,
      },
      1240: {
        items: 4,
        slideBy: 4,
      }
    },
  })
})();