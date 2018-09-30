import {popupActions} from './../components/popup';
import {ajaxPost} from './../components/ajax';


(function() {
  const buttonEl = document.querySelector(`.product__ask-link`);
  const popupEl = document.querySelector(`.popup-ask`);
  if (!buttonEl || !popupEl) return;


  const inputsEls = Array.from(popupEl.querySelectorAll(`.popup-ask__input`));
  inputsEls.forEach((input) => {
    const ls = localStorage ? localStorage.getItem(input.name) : null;
    if (ls) input.value = ls;
  });
  const textareaEl = popupEl.querySelector(`.popup-ask__textarea`);



  buttonEl.onclick = (e) => {
    e.preventDefault();
    popupActions.open(popupEl, closePopup);
  };


  function closePopup() {
    form.classList.remove(`popup-ask__form--loading`);
    form.classList.remove(`popup-ask__form--success`);
    textareaEl.value = ``;
  }



  const form = popupEl.querySelector(`.popup-ask__form`);
  form.onsubmit = (e) => {
    e.preventDefault();
    form.classList.add(`popup-ask__form--loading`);
    ajaxPost(form.action, sendSuccess, sendFailed, new FormData(form))
  }

  function sendSuccess(response) {
    inputsEls.forEach((input) => {
      localStorage.setItem(input.name, input.value);
    });
    form.classList.remove(`popup-ask__form--loading`);
    form.classList.add(`popup-ask__form--success`);
  }
  function sendFailed(response) {
    alert(response);
    form.classList.remove(`popup-ask__form--loading`);
  }
})();