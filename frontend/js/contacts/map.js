(function() {
  let mapEl = document.querySelector(`.contacts__map`);
  if (!mapEl) return;

  let myLatlng = new google.maps.LatLng(56.8682298,53.2736103);
    
  let myOptions = {
      zoom: 16,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  let map = new google.maps.Map(mapEl, myOptions);



  let markerImage = new google.maps.MarkerImage(
    '/img/marker.png',
    new google.maps.Size(33,33)
  );
  let marker = new google.maps.Marker({
    icon: markerImage,
    position: myLatlng,
    map: map,
    title: "Станким" 
  });
})();