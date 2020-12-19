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

  $('.newsletter__form').validate( {
  messages: {  
    email: {
      required: 'Please fill out the form',
      email: 'Required format name@post.com/en/ru',
    },
  },
  });
  
});


var autoSlider = document.querySelector('.swiper-container');
  autoSlider.onmouseout = function(e) {
    mySwiper.autoplay.start();
  };
    autoSlider.onmouseover = function(e) {
    mySwiper.autoplay.stop();
  };

// Первый слайдер
var mySwiper = new Swiper('.slider', {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 7000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Первый слайдер
var mySwiperTwo = new Swiper('.myslider', {
  // Optional parameters
  loop: true,
  

  navigation: {
    nextEl: '.stories-tabs__next',
    prevEl: '.stories-tabs__prev',
  },
});

