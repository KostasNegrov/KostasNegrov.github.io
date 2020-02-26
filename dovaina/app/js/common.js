jQuery(document).ready(function ($) {

  /* slicknav */
  $('.header__menu').slicknav({
    label: 'МЕНЮ',
    prependTo: '.header__navbar .container',
    closedSymbol: '<i class="flaticon-right-arrow"></i>',
    openedSymbol: '<i class="flaticon-down-arrow"></i>',
  });

  /* Background set */
  $('.set-bg').each(function(){
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url('+ bg +')');
  });



  /* Intro slider */
  var intro_s = $(".intro__slider");
    intro_s.owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      dots: true,
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true,   
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
      /* появляется счетчик слайдов */
      onInitialized: function () {
        var a = this.items().length;
        $("#snh-1").html("<span>1</span><span>" + a + "</span>");
      }
    }).on("changed.owl.carousel", function (a) {
      var b = --a.item.index, a = a.item.count;
      $("#snh-1").html("<span> " + (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + a + "</span>"); 

    });
  
  /* класс owl-nav и owl-dots обворачиваются в обвертку */
  // intro_s.append('<div class="slider-nav-warp"><div class="slider-nav"></div></div>');
  // $(".intro__slider .owl-nav, .intro__slider .owl-dots").appendTo('.slider-nav');
    
    /* Product Slider */
  $('.product__slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,    
    navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    }
  });

  $('.card__links--heart').hover(function(){
    $('.card__links--hint').css("opacity", "1" )
  },function(){
    $('.card__links--hint').css("opacity", "0" )
  })


});

//remove preloader



/* Tabs */
function openTab(evt, tabeName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabeName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


$(window).on('load', function () {
	$('.preloader').delay(2000).fadeOut('slow');
});