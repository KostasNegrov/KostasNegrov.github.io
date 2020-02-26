jQuery(document).ready(function ($) {

  /* Навигационное меню hover эффект */
  $('#menu li').hover(function(){
    $('ul', this).fadeIn(500);
  }, function(){
    $('ul', this).fadeOut(500);  
  });  

  /* Подключение Owl-Carousel */
  $(document).ready(function () {
    $('#specialist__slider').owlCarousel({  
      items: 4,  /* Колличество items */  
      loop: true,  /*Листать бесконечно*/
      nav: true,    /*Появятся стрелочки вперед назад*/
      dots: false,
      margin: 30,   /* maggin-right для items */
      smartSpeed: 700,    /*Скорость пролистывания*/
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],/*Текст навигации(иконки)*/
      responsiveClass: true,  /*Это для адаптивности*/
      responsive: {    /*Для разрешения на разных экранах*/
        0: {
          items: 1
        },
        319: {
          items: 1,
          dots: true,
          nav: false,
        },
        415: {
          items: 2,          
          margin: 10
        },
        640: {
          items: 2,  
                 
        },
        769: {
          items: 3
        },
        1025: {
          items: 4,          
        },
        1921: {
          items: 4,          
        },                
      }
    });
  });

  /* Подключаем owl-carousel для блока revieus */
  $(document).ready(function () {
    $('#reviews-block__slider').owlCarousel({       
      items: 1,  /* Колличество items */  
      loop: true,  /*Листать бесконечно*/
      nav: false,    /*Появятся стрелочки вперед назад*/
      dots: true,
      margin: 100,   /* maggin-right для items */
      smartSpeed: 1000,    /*Скорость пролистывания*/
      // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],/*Текст навигации(иконки)*/
      responsiveClass: true,  /*Это для адаптивности*/
      // responsive: {    /*Для разрешения на разных экранах*/
      //   0: {
      //     items: 1
      //   },
      //   319: {
      //     items: 1,
      //     dots: true,
      //     nav: false,
      //   },
      //   415: {
      //     items: 2,          
      //     margin: 10
      //   },
      //   640: {
      //     items: 2,  
                 
      //   },
      //   769: {
      //     items: 3
      //   },
      //   1025: {
      //     items: 4,          
      //   },
      //   1921: {
      //     items: 4,          
      //   },                
      // }
    });
  });

  /* Подключаем slider-pro */
  $('#intro-slider').sliderPro({
    width: '100%',
    height: 500,
    fade: true,            /* Эффект затухания слайда */
    fadeDuration: 3000,     /* Скорость появления слайда */
    autoplayDelay: 8000,    /* Скорость смены слайда */
    autoplayOnHover: 'none',    /* при наведении на слайдер он продолжает меняться */
    arrows: true,    /* стрелки по бокам */
    fadeArrows: false,    /* стрелки отображаются всегда */
    buttons: false,    /* Точки снизу */
    autoplay: true,    
    breakpoints: {    /*Для разрешения на разных экранах*/
      1024: {
        arrows: false,
        buttons: true,
      }			
    }
  });
  /* Подключаем slider-pro для секции отзывы*/
  $('#reviews-slider').sliderPro({
    width: '90%',
    height: 500,
    fade: true,            /* Эффект затухания слайда */
    fadeDuration: 300,     /* Скорость появления слайда */
    autoplayDelay: 8000,    /* Скорость смены слайда */
    autoplayOnHover: 'none',    /* при наведении на слайдер он продолжает меняться */
    arrows: true,    /* стрелки по бокам */
    fadeArrows: false,    /* стрелки отображаются всегда */
    buttons: false,    /* Точки снизу */
    autoplay: false,    
    // breakpoints: {    /*Для разрешения на разных экранах*/
    //   1024: {
    //     arrows: false,
    //     buttons: true,
    //   }			
    // }
  });


  /* Подключаем slider-pro для секции partners*/
  $('#partners-slider').owlCarousel({
    items: 5,  /* Колличество items */
    loop: true,  /*Листать бесконечно*/
    nav: false,    /*Появятся стрелочки вперед назад*/
    dots: true,
    // margin: 50,   /* maggin-right для items */
    smartSpeed: 1000,    /*Скорость пролистывания*/   
    autoplay: true,
    responsiveClass: true,  /*Это для адаптивности*/
    responsive: {    /*Для разрешения на разных экранах*/
      0: {
        items: 1,
        margin: 0
      },
      320: {
        items: 1,        
      },
      414: {
        items: 2,                
      },
      640: {
        items: 3,      
      },
      768: {
        items: 3,      
      },
      992: {
        items: 4,
      },
      1024: {
        items: 4
      },
      1280: {
        items: 5,          
      },
      1920: {
        items: 5,          
      },                
    }
  });
  

  /* Menu */
  var hamburger = $('.hamburger');

  hamburger.click(function() {
    hamburger.toggleClass('is-active')        
  })

  /* Initialize Venobox */ 
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(34, 34, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

/* Initialize Counter */
  $('.counter').counterUp({
    delay: 30,
    time: 900
  });

/* hover на .specialist__item */
  // $('.specialist__infornation').on({
  //   mouseenter: function () {
  //     $('.specialist__item--bg').css('display', 'block');
  //   },
  //   mouseleave: function () {
  //     $('.specialist__item--bg').css('display', 'none');
  //   },
  // })

});

$(window).on('load', function() {
	$('.loader').delay(2000).fadeOut('slow');
})


