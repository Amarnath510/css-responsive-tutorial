$(document).ready(() => {
  
  // For Sticky Navigation
  // waypoint(http://imakewebthings.com/waypoints/) - To trigger a method based on the scroll
  $('.js--section-features').waypoint(function(direction) {
    if (direction === 'down') {
      $('nav').addClass('sticky-nav');
    } else {
      $('nav').removeClass('sticky-nav');
    }
  }, {
    offset: '60px' // 60px before the target section
  });

  // Scrolling effect on click of buttons
  $('.js--scroll-to-sign-up').click(function() {
    $('html, body').animate({ scrollTop: $('.js--section-sign-up').offset().top }, 3000);
  });
  
  $('.js--scroll-to-features').click(function() {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
  });


  // Navigation links scroll effect
  // Extracted from https://css-tricks.com/snippets/jquery/smooth-scrolling/#article-header-id-1
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          //$('.js-mobile-nav-icon').click(); // Custom: to close the mobile nav
          $('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 1000, function () {
            // Not sure but changing focus is not working here hence commenting
            // Callback after animation
            // Must change focus!
            // var $target = $(target);
            // $target.focus();
            // if ($target.is(":focus")) { // Checking if the target was focused
            //   return false;
            // } else {
            //   $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            //   $target.focus(); // Set focus again
            // };
          });
        }
      }
  });

  $('.js-waypoint-1').waypoint(function(direction) {
    $('.js-waypoint-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js-waypoint-2').waypoint(function (direction) {
    $('.js-waypoint-2').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js-waypoint-3').waypoint(function (direction) {
    $('.js-waypoint-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js-waypoint-4').waypoint(function (direction) {
    $('.js-waypoint-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });


  /* Hide/Show Nav for Mobile */
  $('.js-mobile-nav-icon').click(function() {
    $('.js-main-nav').slideToggle(150);
    var $icon = $('.js-fa-icon');
    if ($icon.hasClass('fa-bars')) {
      $icon.addClass("fas fa-times");
      $icon.removeClass("fa fa-bars");
    } else {
      $icon.addClass("fa fa-bars");
      $icon.removeClass("fas fa-times");
    }
  });

});