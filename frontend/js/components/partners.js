import { tns } from "tiny-slider/src/tiny-slider.module";

(function() {
  let block = document.querySelector('.partners');
  if (!block) return;

  let list = block.querySelector('.partners__list');
  let controls = block.querySelector('.slider-controls');

  block.classList.remove('no-js');

  tns({
    container: list,
    items: 2,
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
      },
      1240: {
        items: 5,
      }
    },
  })
})();