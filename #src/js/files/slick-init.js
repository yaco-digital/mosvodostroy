// reviews-badge-slider
$('.reviews-badge-slider').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	fade: false,
	dots: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false
			}
		}
	]
});

// about-block-gallery
$('.about-block-gallery').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	dots: false
});

// logos-cards-slider
$('.logos-cards-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 2,
	arrows: true,
	fade: false,
	dots: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}
	]
});