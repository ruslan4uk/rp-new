import spincrement from './lib/spincrement.js';
import $ from 'jquery';
import 'owl.carousel';

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

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
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
