$(".carousel").owlCarousel({
    margin:65,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
                
      },



      1000:{
        items:4,
        nav: false,
       
      }
    }
  });