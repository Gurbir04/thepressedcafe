// JavaScript Document

$(document).ready(function() {
    
	
	
	/*----------------------------------------------------*/
	  /*  Css3 Transition
	  /*----------------------------------------------------*/
	  
	  
	  $('.carousel').carousel({
        interval: 3000
    });
	  
	  $('*').each(function(){
		if($(this).attr('data-animation')) {
		  var $animationName = $(this).attr('data-animation'),
			$animationDelay = "delay-"+$(this).attr('data-animation-delay');
		  $(this).appear(function() {
			$(this).addClass('animated').addClass($animationName);
			$(this).addClass('animated').addClass($animationDelay);
		  });
		}
	  });
	  
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
  }
);
wow.init();

$('.parallax').simpleParallax();
