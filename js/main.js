//  var height = $(window).height();
//  var width = $(window).width();

// // Анимация движения заднего фона в Главном Экране
// $(document).ready(function(){
//     animateDiv('.cup1');
//     animateDiv('.dollar2');
//     animateDiv('.dollar3');
//     animateDiv('.cup4');
//     animateDiv('.dollar5');
//     animateDiv('.cup6');
//     animateDiv('.dollar7');
//     animateDiv('.finger8'); // Переменные для каждой анимированной картинки (добавлять сюда каждый новый класс)
//     animateDiv('.cup9');
//     animateDiv('.cup11');
//     animateDiv('.dollar12');
//     animateDiv('.dollar13');
//     animateDiv('.cup14');
//     animateDiv('.dollar15');
//     animateDiv('.cup16');
//     animateDiv('.dollar17');
//     animateDiv('.finger18');
//     animateDiv('.cup19');
//     animateDiv('.dollar20');
//     animateDiv('.cup21');
// });

// if ((height >= 850) && (width >= 1600)) {

//   function makeNewPosition(){
      
//       // Get viewport dimensions (remove the dimension of the div)
//       var h = $(window).height() - 500;
//       var w = $(window).width() - 500;
      
//       var nh = Math.floor(Math.random() * h);
//       var nw = Math.floor(Math.random() * w);

//       return [nh,nw];
//   }

//   function animateDiv(myclass){

//           var newq = makeNewPosition();

//           $(myclass).animate({ top: newq[0], left: newq[1] }, 45000,   function(){
//           animateDiv(myclass);        
//           });
//   };
// } 

// Скроллинг по секциям

    $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 2000);
    return false;
  });


// Slick Сладйер

$(function(){
  $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ],
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next')
  });
});


// Видео плеер

$('#play').on('click', function(e) {
	e.preventDefault();
	$("#player")[0].src += "?autoplay=1";
	$('#player').show();
	$('#video-cover').hide();
	$('#play').hide();
})

$('#play2').on('click', function(e) {
	e.preventDefault();
	$("#player2")[0].src += "?autoplay=1";
	$('#player2').show();
	$('#video-cover2').hide();
	$('#play2').hide();
})

$('#play3').on('click', function(e) {
	e.preventDefault();
	$("#player3")[0].src += "?autoplay=1";
	$('#player3').show();
	$('#video-cover3').hide();
	$('#play3').hide();
})
