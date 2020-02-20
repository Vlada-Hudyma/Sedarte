/* eslint-disable */

let home = {
  init() {
    this.header_burger = $('.header__burger');
    this.Burger();
    this.HiddenText();
    this.ListParallax();
  },
  Burger() {
    this.header_burger.click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
    });
  },
  HiddenText() {
    $('.buttonBox').on('click', function () {
      $(this).parent().parent().parent().find('.allContent').slideToggle();
    })
  },
ListParallax() {
  $('.parallax').parallax({imageSrc: './assets/image/буча.png', speed: 0.7});
  $('.parallax1').parallax({imageSrc: './assets/image/ирпень.png', speed: 0.7});
  $('.parallax2').parallax({imageSrc: './assets/image/obolonSky.png', speed: 0.7});
  $('.parallax3').parallax({imageSrc: './assets/image/файнаТаун.png', speed: 0.7});
  $('.parallax4').parallax({imageSrc: './assets/image/галактика.png', speed: 0.7});
  $('.parallax5').parallax({imageSrc: './assets/image/паркЛенд.png', speed: 0.7});
  $('.parallax6').parallax({imageSrc: './assets/image/бульвар.png', speed: 0.7});
  $('.parallax7').parallax({imageSrc: './assets/image/осыково.png', speed: 0.7});
  $('.parallax8').parallax({imageSrc: './assets/image/варшавский.png', speed: 0.7});
  }
};

$(document).ready(function() {
  home.init();
});

