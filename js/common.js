
  $('.categorySectionSlider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    dots:true,

  })


  $('.categorySectionSliderAbout').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    dots:false,
    autoHeight: false,
  })

  $('.pageSectionSlider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    dots:false,
    autoHeight: false,
  })

  $('.pageSection--about-two-slider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    dots:false,
  })


  var tileLayer = new L.TileLayer('//{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  });


  var greenIcon = L.icon({
    iconUrl: './img/map-marker.svg',
    iconSize:     [38, 95],
  });

  var map = new L.Map('map', {
    'center': [55.764162,37.6150249],
    'zoom': 17,
    'layers': [tileLayer],
    'scrollWheelZoom': false
  });

  L.marker([55.764162,37.6150249], {icon: greenIcon}).addTo(map);
