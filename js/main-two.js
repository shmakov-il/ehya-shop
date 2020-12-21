$(document).ready(function () {
  var tabsItem = $(".tabs-item");
  var contentItem = $(".trend-bottom ");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("tabs-item--active");
    contentItem.removeClass("trend-bottom--active");
    $(activeContent).addClass("trend-bottom--active");
    $(this).addClass("tabs-item--active");
  });

  $(".newsletter__form").validate({
    messages: {
      subscribe: {
        required: "Пожалуйста, заполните форму",
        email: "Нужный формат name@post.com/en/ru",
      },
    },
  });
  var modalButton = $("[data-toggle=modal]");
  var modalCloseButton = $(".modal__close");
  var closeModalButtonAll = $(".modal__overlay");
  modalButton.on("click", openModal);
  modalCloseButton.on("click", closeModal);
  closeModalButtonAll.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  $(document).on("keydown", function (e) {
    if (e.keyCode === 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
  $(".telphone").mask("+7 (000) 000-00-00");
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        bookingName: {
          required: "Пожалуйста, введите имя",
          minlength: "Короткое имя",
        },
        bookingPhone: {
          required: "Пожалуйста, введите номер телефона",
          minlength: "Нужный формат +7 (xxx) xxx xx xx",
        },
        bookingSubscribe: {
          required: "Пожалуйста, введите email",
          email: "Нужный формат name@post.com/en/ru",
        },
      },
    });
  });
});


// Первый слайдер
var mySwiper = new Swiper(".slider", {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 7000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Первый слайдер
var mySwiperTwo = new Swiper(".myslider", {
  // Optional parameters
  // loop: true,

  navigation: {
    nextEl: ".stories-tabs__next",
    prevEl: ".stories-tabs__prev",
  },
});

var menuButton = document.querySelector(".button-menu");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".header__menu")
    .classList.toggle("header__menu--visible");
});

var menuClose = document.querySelector(".header-close");
menuClose.addEventListener("click", function () {
  document
    .querySelector(".header__menu")
    .classList.remove("header__menu--visible");
});
