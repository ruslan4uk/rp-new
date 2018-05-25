import spincrement from './lib/spincrement.js';
import $ from 'jquery';
import 'owl.carousel';

/* count digits animation */
$(document).ready(function() {
  let show = true;
  let countbox = '.about';
  $(window).on('scroll load resize', function() {

    if (!show) return false;

    let w_top = $(window).scrollTop();
    let e_top = $(countbox).offset().top;

    let w_height = $(window).height();
    let d_height = $(document).height();

    let e_height = $(countbox).outerHeight();

    if (w_top + 600 >= e_top || w_height + w_top === d_height || e_height + e_top < w_height) {
      $('.about__number').spincrement({
        thousandSeparator: '',
        duration: 2500
      });

      show = false;
    }
  });
});

/* carousel owl */
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  navText: ["<svg class='work__arr work__arr--left'><use xlink:href='img/sprite.svg#icon-chevrone'></use></svg>", "<svg class='work__arr work__arr--right'><use xlink:href='img/sprite.svg#icon-chevrone'></use></svg>"],
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 2,
      nav: true,
      loop: false
    }
  }
});
