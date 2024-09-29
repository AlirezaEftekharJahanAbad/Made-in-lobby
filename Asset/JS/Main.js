$(document).ready(function(){
    $('.news-slider').slick({
        rtl:true,
        arrows:true,
        slidesToShow:4,
        prevArrow:'<span id="prevArrow"></span>',
        nextArrow:'<span id="nextArrow"></span>',

        responsive: [
            {
              
              breakpoint: 992,
              settings: {
                slidesToShow:2,
              }
            },
          ]
    });
  });
      