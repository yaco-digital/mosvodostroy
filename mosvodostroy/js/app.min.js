// sub menu script
let SubMenuList = jQuery('.header-menu ul > li').children('ul');
let SubMenuItem = jQuery(SubMenuList).closest('li');

SubMenuItem.addClass('sub-menu-item');
SubMenuList.addClass("sub-menu-list");

jQuery(SubMenuItem).click(function () {
	jQuery(this).toggleClass('show');
	jQuery(this).children('.sub-menu-list').toggleClass('show');
});