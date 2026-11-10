$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  $('.scroll-up-btn').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    $('html').css('scrollBehavior', 'auto');
  });

  $('.navbar .menu li a, .menu-btn').click(function() {
    $('html').css('scrollBehavior', 'smooth');
    $('.navbar .menu').removeClass('active');
    $('.menu-btn i').removeClass('active');
  });

  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  if (typeof Typed !== 'undefined') {
    new Typed('.typing', {
      strings: ['Web Developer', 'App Developer', 'Editor', 'Designer', 'Freelancer', 'Gamer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    new Typed('.typing-2', {
      strings: ['Web Developer', 'App Developer', 'Editor', 'Designer', 'Freelancer', 'Gamer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

});
