$(document).ready(function () {
  // hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    smartspeed: 1000,
    items: 1,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: false,
        dots: true,
      },
      768: {
        nav: true,
      },
    },
  });

  // project slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    margin: 24,
    navText: ["PREV", "NEXT"],
    smartspeed: 1000,

    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      567: {
        items: 2,
        dots: true,
      },
      768: {
        items: 2,
        nav: true,
        dots: true,
      },
      1140: {
        items: 3,
        center: true,
        dots: true,
      },
    },
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 800,
  });
});
