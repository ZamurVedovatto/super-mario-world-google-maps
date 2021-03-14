function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 34.66879900039354,
      lng: 135.43004324966117
    },
    zoom: 16,
    mapId: '408e75da6bf6e7b5',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  })



  const marker = new google.maps.Marker({
    position: { lat: 34.66658415352165, lng: 135.42928150230333 },
    map,
    title: "New Life!",
    icon: {
      url: './assets/sm (1).svg',
      scaledSize: new google.maps.Size(50, 40)
    },
    animation: google.maps.Animation.DROP
  });
  const infowindow = new google.maps.InfoWindow({
    content: "New Life!"
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker)
  });
}


