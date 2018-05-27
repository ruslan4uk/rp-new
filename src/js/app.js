import $ from 'jquery';
import spincrement from './lib/spincrement.js';
import 'owl.carousel';
import remodal from 'remodal';

/* js accordion */
$('.js-accordion .accordion__btn').click(function() {
  let item = $(this).parent();

  if(item.hasClass('is-opened')) {
    item.removeClass('is-opened');
  } else {
    item.addClass('is-opened');
  }
});

/* scroll to anchor */
$(function() {
  $("a[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 500);
        return false;
      }
    }
  });
});

/* add and remove class head to scroll top */
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $('.top').addClass('top--fix');
  } else {
    $('.top').removeClass('top--fix');
  }
});

/* remodal window */
$('[data-remodal-id=modal]').remodal();

/* count digits animation */
$(document).ready(function() {
  let show = true;
  let countbox = '.about';
  $(window).on('scroll load resize', function() {

    if($(countbox).length > 0) {
      if (!show) return false;

      let wTop = $(window).scrollTop();
      let eTop = $(countbox).offset().top;

      let wHeight = $(window).height();
      let dHeight = $(document).height();

      let eHeight = $(countbox).outerHeight();

      if (wTop + 600 >= eTop || wHeight + wTop === dHeight || eHeight + eTop < wHeight) {
        $('.about__number').spincrement({
          thousandSeparator: '',
          duration: 2500
        });

        show = false;
      }
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
