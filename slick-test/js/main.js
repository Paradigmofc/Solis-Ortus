// Slick Сладйер

$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          }
        ],
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });
  });