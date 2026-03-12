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