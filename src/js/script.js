$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
			item: 1,		
			center: true,
			margin: 10,
			nav: true,
			dots: false,			
			loop: true			
	});
	$(".header-burger").click(function() {
		$(".header-burger, .header-nav").toggleClass("active");
		$("body").toggleClass("lock");
	});
});