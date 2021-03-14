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

  // name
  // latitude, longitude
  // image url
  // scaledSize innerWidth, height
  const markers = [
    [
      "New Life!",
      34.67002111165768, 135.43029001312496,
      './assets/sm (1).svg',
      50, 40
    ],
    [
      "Toad\'s House",
      34.67008287853562, 135.43255379767922,
      './assets/sm (2).svg',
      50, 40
    ],
    [
      "Super Star\'s House",
      34.667726880711314, 135.43253234000642,
      './assets/sm (3).svg',
      50, 40
    ],
    [
      "Mario is here",
      34.66894459581794, 135.42865923006943,
      './assets/sm (4).svg',
      50, 40
    ],
    [
      "Mario\'s Garage",
      34.665970868715966, 135.42954972348986,
      './assets/sm (5).svg',
      50, 40
    ],
    [
      "Don\'t come here",
      34.67041818364065, 135.42533329078836,
      './assets/sm (6).svg',
      50, 40
    ],
    [
      "Mario\'s Bank",
      34.66541493756377, 135.4253440196248,
      './assets/sm (7).svg',
      50, 40
    ],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
      },
      animation: google.maps.Animation.DROP
    });
    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0]
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker)
    });


    console.log(marker)
  }




}


