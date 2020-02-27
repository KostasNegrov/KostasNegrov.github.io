$(document).ready(function() {
  
  /* Скрипт для отображения активного блока при нажатии на TAB */
  $('.works__btn button, .works__btn a').on('focus', function (e) {
    $(this).parents('.works__element').addClass('works__element--active');
  });  
  $('.works__btn button, .works__btn a').on('blur', function (e) {
    $(this).parents('.works__element').removeClass('works__element--active');
  });

  /* Скрипт для секции скилов  */
  function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
    const progressElement = $(node);
    progressElement.each(function (value, item) {
      $(item).find(nodeLine).animate({
        width: item.dataset.progressPercent + '%'
      }, animationLength);
      $(item).find(tooltip).show(animationLength);
    });
  }

  let animate = true;


  $(window).scroll(function () {

    if ($('.skills').offset().top <= $(window).scrollTop() + 150) {
      if (animate) {
        moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
      }
      animate = false;
    }

  });

  /* Подключение OwlCarousel */
  $('.owl-carousel').owlCarousel({
    loop: true,    
    margin: 0,
    nav: true,
    dots: false,
    navText: [],
    items: 5,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      980: {
        items: 5
      },
    }
  })
  

});