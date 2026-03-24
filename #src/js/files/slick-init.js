// reviews-badge-slider
$('.reviews-badge-slider').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	fade: false,
	dots: false,
	responsive: [
		{
			breakpoint: 1201,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
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
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
	]
});

// projects-single-slider
$('.projects-single-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	dots: false
});

// product-gallery-slider
$('.product-gallery-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	dots: false
});