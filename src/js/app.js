import $ from 'jquery';
import spincrement from './lib/spincrement.js';
import 'owl.carousel';
import remodal from 'remodal';
import WOW from './lib/wowjs.js';

/* mobile navugation */
let burger    = $('.js--mobile-navigation-burger'),
  menu      = $('.js--mobile-navigation'),
  closeBtn  = $('.js--mobile-navigation-close');
burger.on('click', function() {
  menu.addClass('is-opened');
  return false;
});
closeBtn.on('click', function() {
  menu.removeClass('is-opened');
  return false;
});

/* wowjs */
var wow = new WOW(
  {
    boxClass:     'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0, // distance to the element when triggering the animation (default is 0)
    mobile:       true, // trigger animations on mobile devices (default is true)
    live:         true, // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

/* open services */
$('.js--open-services').on('click', function(e) {
  let services = $('.services__hide');

  if(services.hasClass('is-opened')) {
    services.removeClass('is-opened');
  } else {
    services.addClass('is-opened');
  }
  return false;
});

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
