$(document).ready(function() {
	$('.menu-toggler').on('click', function(event) {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
		// $('.top-nav').toggleClass('close');
	});

	$('.top-nav .nav-link').on('click', function() {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	// smooth scroll effect
	$('nav a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));

		if (target.length) {
			event.preventDefault();
			$('html, body')
				.stop()
				.animate(
					{
						scrollTop: target.offset().top,
					},
					1000
				);
		}
	});
	// scroll up
	/*$('#up').on('click', function(event) {
		var target = $(this.getAttribute('href'));

		if (target.length) {
			event.preventDefault();
			$('html, body')
				.stop()
				.animate(
					{
						scrollTop: 0,
					},
					2000
				);
		}
	});*/
	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true,
	});
});
