(function() {
  const phoneLinkEls = Array.from(document.querySelectorAll('.phone-link'));
  phoneLinkEls.forEach(link => {
    link.addEventListener('copy', (evt) => {
      if (window.yaCounter22113436) {
        try {
          window.yaCounter22113436.reachGoal('phone_copy')
        }
        catch (ex) {
        }
      }
    })
  })

  const mailLinkEls = Array.from(document.querySelectorAll('.email-link'));
  mailLinkEls.forEach(link => {
    link.addEventListener('copy', (evt) => {
      if (window.yaCounter22113436) {
        try {
          window.yaCounter22113436.reachGoal('email_copy')
        }
        catch (ex) {
        }
      }
    })
  })
})();