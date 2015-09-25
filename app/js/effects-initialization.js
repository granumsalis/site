$(function () {

  $('.slider').slider({full_width: true});

  $('.parallax').parallax();

  $('.thinkslow-events-list:first-child').addClass('active');

  $('.scrollspy').scrollSpy();

  $('.ts-scrollspy-link').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
      if (target.length) {
        $('.button-collapse').sideNav('hide');
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
});
