// sub menu script
let SubMenuList = jQuery('.header-menu ul > li').children('ul');
let SubMenuItem = jQuery(SubMenuList).closest('li');

SubMenuItem.addClass('sub-menu-item');
SubMenuList.addClass("sub-menu-list");

jQuery(SubMenuItem).click(function () {
	jQuery(this).toggleClass('show');
	jQuery(this).children('.sub-menu-list').toggleClass('show');
});

// custom checkbox
/*
document.querySelectorAll('.cta-privacy').forEach(block => {
	const checkbox = block.querySelector('input[type="checkbox"]');
	const label = block.querySelector('label');

	checkbox.addEventListener('change', () => {
		label.classList.toggle('checked', checkbox.checked);
	});
});
*/
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