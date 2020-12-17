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