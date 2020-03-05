
  $('.mainSectionHeaderBtn').click(function () {
    $('body').toggleClass('mobileMenu--show')
  })

  $('.mobileMenuClose').click(function () {
    $('body').removeClass('mobileMenu--show')
  })

  const existElem1 = $('.categorySectionSlider')
  const existElem2 = $('.categorySectionSliderAbout')
  const existElem3 = $('.pageSectionSlider')
  const existElem4 = $('.pageSection--about-two-slider')
  const existElem5 = $('#map')

  existElem1.length && $('.categorySectionSlider').owlCarousel({
    loop:true,
    margin:10,
    items:1,

    responsive:{
      0:{
        nav:false,
        dots:false,
      },
      768:{
        nav:true,
        dots:true,
      },
      1000:{
        nav:true,
        dots:true,
      }
    }
  })


  existElem2.length && $('.categorySectionSliderAbout').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    dots:false,
    autoHeight: false,
  })

  existElem3.length && $('.pageSectionSlider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    dots:false,
    autoHeight: false,
  })

  existElem4.length && $('.pageSection--about-two-slider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    dots:false,
  })

  console.log('.existElem5',existElem5.length)

  if(existElem5.length){
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

    // L.marker([55.764162,37.6150249], {icon: greenIcon}).addTo(map);
    L.marker([55.764162,37.6150249], {icon: greenIcon}).addTo(map);


    var popup = L.popup()
      .setLatLng([55.764162,37.6150249])
      .setContent(`<div class="contactMapMarkerText">Улица Петровская, дом 20/1</div>`)
      .openOn(map);
  }
