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