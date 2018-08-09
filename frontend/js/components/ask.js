import {popupActions} from './popup';
import {ajaxPost} from './common';


(function() {
  const button = document.querySelector('.ask-button');
  const popup = document.querySelector('.popup-ask');
  if (!button || !popup) return;

  const inputs = Array.from(popup.querySelectorAll('.popup-ask__input'));
  inputs.forEach((input) => {
    const ls = localStorage ? localStorage.getItem(input.name) : null;
    if (ls) input.value = ls;
  });
  const textarea = popup.querySelector('.popup-ask__textarea');



  button.onclick = (e) => {
    e.preventDefault();
    popupActions.open(popup, closePopup);
  };


  function closePopup() {
    form.classList.remove('popup-ask__form--loading');
    form.classList.remove('popup-ask__form--success');
    textarea.value = '';
  }



  const form = popup.querySelector('.popup-ask__form');
  form.onsubmit = (e) => {
    e.preventDefault();
    form.classList.add('popup-ask__form--loading');
    ajaxPost(form.action, sendSuccess, console.log)
  }

  function sendSuccess(response) {
    inputs.forEach((input) => {
      localStorage.setItem(input.name, input.value);
    });
    form.classList.remove('popup-ask__form--loading');
    form.classList.add('popup-ask__form--success');
  }
  function sendFailed(response) {
    alert(response);
  }
})();