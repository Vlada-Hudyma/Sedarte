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
    $('.allContent').show();
    $('.buttonBox').on('click', function () {
      $(this).parent().parent().parent().find('.allContent').slideToggle();
    })
  },
ListParallax() {
  $('.image').parallax({speed: 0.7});
  }
};

$(document).ready(function() {
  home.init();
});

