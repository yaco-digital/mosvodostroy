// 2 уровень меню
let SubMenuList = jQuery('.header-menu > ul > li > ul');
let SubMenuItem = jQuery(SubMenuList).closest('li');

let footerSubMenuList = jQuery('.footer-menu > ul > li > ul');
let footerSubMenuItem = jQuery(footerSubMenuList).closest('li');

SubMenuItem.addClass('sub-menu-item');
SubMenuList.addClass("sub-menu-list");

footerSubMenuItem.addClass('footer-sub-menu-item');
footerSubMenuList.addClass("footer-sub-menu-list");

jQuery(SubMenuItem).click(function () {
	jQuery(this).toggleClass('show');
	jQuery(this).children('.sub-menu-list').toggleClass('show');
});

jQuery(footerSubMenuItem).click(function () {
	jQuery(this).toggleClass('show');
	jQuery(this).children('.footer-sub-menu-list').toggleClass('show');
});

// функционал открытия меню
jQuery(document).ready(function () {
	let mobileMenuWrap = jQuery(".site-header__wrap");
	jQuery(".burger-button").click(function () {
		jQuery(this).toggleClass('open');
		jQuery(mobileMenuWrap).toggleClass('show');
		jQuery("body").toggleClass('overflow-hidden');
	});
});

// accordeon
(function ($) {
	// variables
	var accordionBtn = document.querySelectorAll('.accordion-title');
	var allTexts = document.querySelectorAll('.accordion .content');
	var accIcon = document.querySelectorAll('.accordion-icon');

	// event listener
	accordionBtn.forEach(function (el) {
		el.addEventListener('click', toggleAccordion)
	});

	// function
	function toggleAccordion(el) {
		var targetText = el.currentTarget.nextElementSibling.classList;
		var targetAccIcon = el.currentTarget.children[0];
		var target = el.currentTarget;

		if (targetText.contains('show')) {
			targetText.remove('show');
			targetAccIcon.classList.remove('active');
			target.classList.remove('active');
		}
		else {
			accordionBtn.forEach(function (el) {
				el.classList.remove('active');

				allTexts.forEach(function (el) {
					el.classList.remove('show');
				})

				accIcon.forEach(function (el) {
					el.classList.remove('active');
				})

			})
			targetText.add('show');
			target.classList.add('active');
			targetAccIcon.classList.add('active');
		}
	}
})(jQuery);

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