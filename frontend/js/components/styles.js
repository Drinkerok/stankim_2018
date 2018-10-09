(function() {
  function addStyle() {
    let style2 = document.createElement('style');
    style2.rel = 'stylesheet';
    document.head.appendChild(style2);
    style2.textContent = localStorage.styles;
  }

  try {
    if (localStorage.styles && localStorage.styles_hash == '10.10.2018') {
      addStyle();
    } else {
      let request = new XMLHttpRequest();

      request.open('GET', '/css/styles.css', true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            localStorage.styles = request.responseText;
            localStorage.styles_hash = '10.10.2018';
            addStyle();
        }
      }
      request.send();
    }
  } catch(ex) {
      // maybe load the font synchronously for woff-capable browsers
      // to avoid blinking on every request when localStorage is not available
  }
})()