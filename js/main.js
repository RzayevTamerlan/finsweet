$(function () {
  $("#rateYo").rateYo({
    rating: 4.5,
    readOnly: true
  });
  var mixer = mixitup('.blog__posts-list');
  $('.blog__filter-btn').on('click', function name() {
    $('.blog__filter-btn').removeClass('blog__filter-btn--accent')
    $(this).addClass('blog__filter-btn--accent')
  })
  $('.testimonials__sliders').slick({
    arrows: false,
    slidesToShow: 2,
    slideToScroll: 1,
    infinite: true,
    waitForAnimate: true,
    dots: true,
    appendDots: $('.testimonials__dots'),
    responsive:
    [
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  });
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__sliders').slick('slickNext')({
    })
  })
  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__sliders').slick('slickPrev')({
    })
  })
  $('.questions__item-inner').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('questions__item--active')
    $(this).children('.questions__answer').slideToggle()
  })
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('burger--open')
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger__liniya1').toggleClass('burger--krest1')
    $('.burger__liniya2').toggleClass('burger--krest2')
    $('.burger__liniya3').toggleClass('burger--krest3')
  })
  setInterval(() => {
    if ($(window).scrollTop()>500 && $('.header__top').hasClass('header__top--open') === false){
      $('.burger').addClass('burger--follow');
    } else {
      $('.burger').removeClass('burger--follow');
    }
  },0);
  $(".header__btn-box, .header__nav").on("click","a", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});
})
