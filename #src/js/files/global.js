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

// tabs
jQuery('.tabgroup > div').removeClass('show');
jQuery('.tabgroup > div:first-of-type').addClass('show');
jQuery('.tabs > li:first-of-type a').addClass('active');
jQuery('.tabs a').click(function (e) {
	e.preventDefault();
	let $this = $(this),
		tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
		others = $this.closest('li').siblings().children('a'),
		target = $this.attr('href');
	others.removeClass('active');
	$this.addClass('active');
	jQuery(tabgroup).children('div').removeClass('show');
	jQuery(target).addClass('show');
});

// Карточки в услугах c расходниками
document.querySelectorAll('.consumables-cards__item .btn').forEach(button => {
	button.addEventListener('click', function () {
		// Находим текущую карточку (родителя)
		const card = this.closest('.consumables-cards__item');

		// Берём заголовок внутри неё
		const title = card.querySelector('.consumables-cards__title').textContent.trim();

		// Вставляем в input
		document.getElementById('consumables-name-input').value = title;
		document.getElementById('consumables-name-text').textContent = title;
	});
});

// Карточки в услугах c тарифами
document.querySelectorAll('.tariff-cards__info').forEach(card => {
	const btn = card.querySelector('.tariff-cards__info-btn');
	const dropdown = card.querySelector('.tariff-cards__info-dropdown');

	btn.addEventListener('click', () => {
		const isOpen = dropdown.classList.contains('show');

		// закрываем все
		document.querySelectorAll('.tariff-cards__info-dropdown').forEach(d => d.classList.remove('show'));
		document.querySelectorAll('.tariff-cards__info-btn').forEach(b => {
			b.textContent = 'Развернуть подробное описание';
		});

		// открываем текущий если был закрыт
		if (!isOpen) {
			dropdown.classList.add('show');
			btn.textContent = 'Скрыть описание';
		}
	});
});

document.querySelectorAll('.tariff-cards__item .btn').forEach(button => {
	button.addEventListener('click', function () {
		// Находим текущую карточку (родителя)
		const card = this.closest('.tariff-cards__item');

		// Берём заголовок внутри неё
		const title = card.querySelector('.tariff-cards__title').textContent.trim();

		// Вставляем в input
		document.getElementById('tariff-name-input').value = title;
		document.getElementById('tariff-name-text').textContent = title;
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