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



export function setNewImg({imgEl, descriptionEl, link, description}) {
  descriptionEl.classList.remove(`empty`);
  descriptionEl.textContent = `Загрузка...`;
  imgEl.src = ``;

  const newImg = document.createElement(`img`);
  newImg.onload = () => {
    imgEl.src = link;
    if (description && description !== ``) {
      descriptionEl.textContent = description;
    } else {
      descriptionEl.classList.add(`empty`);
    }
  };
  newImg.src = link;
}