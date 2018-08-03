export function clickInsideElement(e, elClass) {
  let target = e.target;

  function checkElement(elem) {
    if (elem.classList && elem.classList.contains(elClass)) {
      return elem;
    }

    if (elem.parentNode) {
      return checkElement(elem.parentNode);
    }

    return false;
  }

  return checkElement(target);
}