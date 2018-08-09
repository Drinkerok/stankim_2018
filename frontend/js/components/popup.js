let popup = null;
let cb = null;

let isEscPressed = function(e) {
  return e.keyCode == 27;
}

let closeByEsc = function(e) {
  if (isEscPressed(e)) {
    closePopup();
  }
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('popup__close')) {
    closePopup();
  }
});
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('popup')) {
    closePopup();
  }
});



function openPopup(incomePopup, callback) {
  popup = incomePopup;
  cb = callback;

  popup.classList.add('popup--active');
  window.addEventListener('keydown', closeByEsc);
}

function closePopup() {
  if (!popup) return;

  popup.classList.remove('popup--active');
  window.removeEventListener('keydown', closeByEsc);

  if (cb) cb();

  popup = null;
  cb = null;
}


export const popupActions = {
  open: openPopup,
  close: closePopup,
}
