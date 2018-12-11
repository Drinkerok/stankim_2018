const SRC_MAP = `https://maps.google.com/maps/api/js?key=AIzaSyAyW-QoWE94Q_PRJaKFaPp1HQpXngYNBwU`;

function addScript(src, callBack) {
  const script = document.createElement(`script`);
  script.src = src;

  script.onload = () => {
    callBack();
  };
  script.onerror = (err) => {
  }

  document.body.appendChild(script);
}

function initMap() {
  const mapEl = document.querySelector(`.contacts__map`);
  const myLatlng = new google.maps.LatLng(56.8682298,53.2736103);

  const myOptions = {
      zoom: 16,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  const map = new google.maps.Map(mapEl, myOptions);



  const markerImage = new google.maps.MarkerImage(
    '/img/marker.png',
    new google.maps.Size(33,33)
  );
  const marker = new google.maps.Marker({
    icon: markerImage,
    position: myLatlng,
    map: map,
    title: "Станким" 
  });
}


(function() {
  const mapEl = document.querySelector(`.contacts__map`);
  if (!mapEl) return;

  addScript(SRC_MAP, initMap);
})();