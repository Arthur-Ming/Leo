$(document).ready(function () {

  $('.slider').slick({
    arrows: true,         /*стрелки, по умолчанию true*/
    dots: true,           /*точки, по умолчанию false*/
    adaptiveHeight: true, /*адаптивная высота, поумл false*/
    slidesToShow: 3,      /*кол-во отоброжаемых слайдов */
    slidesToScroll: 1,    /*кол-во пролистывается за одно нажатие*/
    speed: 1000,           /*скорость пролистывания поумл == 300*/
    easing: 'ease',       /*сценарий анимации поумл linear*/
    infinite: true,      /*бесконечный слайдер поумл true*/
    initialSlide: 0,      /*стартовый слайд поумл 0*/
    autoplay: false,       /*автопролистование*/
    autoplaySpeed: 1500,  /*скорость автопролистования*/
    pauseOnFocus: false,  /*пауза autoplay если слайд в фокусе*/
    pauseOnHover: true,   /*пауза autoplay если на слайде курсор */
    pauseOnDotsHover: true, /*пауза autoplay если на кнопке курсор*/
    draggable: true,              /*вкл/выкл листание слайдера курсором, по умл true*/
    swipe: true,                  /*вкл/выкл листание слайдера курсором на тачскринах*/
    touchThreshold: 5,            /*отвечает за момент срабатывания swipe, поумл == 5*/
    touchMove: false,              /*вкл/выкл возможность тянуть слайд при swipe*/
    waitForAnimate: false,          /*если выкл то можно быстро листать слайдер, поумл true*/
    centerMode: false,              /*центрирует слайд*/
    variableWidth: false,           /*автоширина слайда, слайды разной ширины поумл false*/
    rows: 1,                        /*число рядов поумл 1*/
    slidesPerRow: 1,                  //число слайдов в ряду поумл 1
    vertical: false,                   //вертикальный слайдер
    verticalSwiping: false,            //прокрутка верт слайдера
    //asNavFor: ".sliderbig",            //связывает слайдеры
    responsive: [                      //адаптив
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    //appendArrows: $('.content'),  //перенос стрелок/кнопак в другой блок
    // appendDots: $('.content'),

  });
  /*======события сладера=====*/
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

    console.log(nextSlide);
  });
  /*
   $('.sliderbig').slick({
        arrows: false,
        fade:true,                 //слайды не листаются, а заменяются
        asNavFor: ".slider",
 
   });
   */
});

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

document.querySelector(".main-tabs__links").addEventListener('mousedown',
  function (event) {
    event.preventDefault();
  });


function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}
ibg();

$('.menu-header__burger').on('click', function (event) {
  $('.header-menu').toggleClass('active');
  $('.menu-header__burger').toggleClass('bl');
  $('body').toggleClass('lock');

});