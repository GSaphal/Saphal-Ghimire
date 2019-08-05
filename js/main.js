(function($) {
	

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

	
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      },250, 'easeInOutExpo');

      event.preventDefault();
    }
  });
	
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 900) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
		else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


 

})(jQuery);
