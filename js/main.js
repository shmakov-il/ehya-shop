$(document).ready(function () {
  var tabsItem = $('.tabs-item');
  var contentItem = $('.trend-bottom ');

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('tabs-item--active');
    contentItem.removeClass('trend-bottom--active');
    $(activeContent).addClass('trend-bottom--active');
    $(this).addClass('tabs-item--active');
  });

  
});


var autoSlider = document.querySelector('.swiper-container');
  autoSlider.onmouseout = function(e) {
    mySwiper.autoplay.start();
  };
    autoSlider.onmouseover = function(e) {
    mySwiper.autoplay.stop();
  };


var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 7000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})