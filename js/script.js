/* ==== Слайдеры === */
$(document).ready(function () {

  $('.banner-slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    infinite: false,
    centerPadding: '10px',
  });
});
/* ==== Табы === */
$('.main-tabs__links').on('click', '.main-tabs__link', function (event) {

  $('.main-tabs__link').removeClass('main-tabs__link_active');
  $(this).addClass('main-tabs__link_active');

  $('.main-tabs-content').removeClass('main-tabs-content_active');
  $('#' + $(this).attr('data-link')).addClass('main-tabs-content_active');

});

$('.main-tabs__links').on('mousedown', function (event) {
  event.preventDefault();
});
/* ==== === */
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg();
/* ==== Бургер === */
$('.header__menu-burger').on('click', function (event) {
  $('.header-menu').toggleClass('active');
  $('.header__menu-burger').toggleClass('header__menu-burger_black');
  $('body').toggleClass('lock');
});


/*
document.querySelector(".main-tabs__links").addEventListener("click", function (event) {

  let target = event.target.closest(".main-tabs__link");
  if (!target) return;

  let links = document.querySelectorAll(".main-tabs__link");
  for (let link of links) {
    if (link.classList.contains("active"))
      link.classList.remove("active");
  }

  target.classList.add("active");

  let tab_content = document.querySelectorAll(".main-tabs__content");
  for (let tab of tab_content) {
    if (tab.classList.contains("active"))
      tab.classList.remove("active");
  }

  document.getElementById(target.dataset.link).classList.add("active");;

});
*/


/*
document.querySelector(".main-tabs__links").addEventListener('mousedown',
  function (event) {
    event.preventDefault();
  });
*/
