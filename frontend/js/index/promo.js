import { tns } from "tiny-slider/src/tiny-slider";

(function() {
  const blockEl = document.querySelector('.index-promo');
  if (!blockEl) return;

  const listEl = blockEl.querySelector('.index-promo__list');

  tns({
    container: listEl,
    items: 1,
    slideBy: 1,
    autoplay: false,
    mouseDrag: true,
    controls: false,
    nav: false,
    speed: 300,
    loop: true,
    gutter: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
  })
})();