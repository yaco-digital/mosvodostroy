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
// Переменные
var tmp = ''; //временная переменная для вычислений и прочего
var st = 1; //текущий шаг
var type = 0; //тип скважины
var regionName = ''; //название региона
var regionDepth = 0; //глубина в регионе
var regionRange = 0; //диапазон в регионе
var regionExpensive = 0; //удорожание в регионе
var tubeName = ''; //название трубы
var tubePrice = 0; //цена трубы
var tubeSqPrice = 0; //цена трубы (песок)
var depth = 0; //глубина

// Показ необходимого шага
function showStep(step) {
	jQuery('#calculate .slides>.item').fadeOut();
	setTimeout(function () {
		jQuery('#calculate .slides>.item[data-slide="' + step + '"]').fadeIn();
	}, 500);
	jQuery('#calculate .slide-navigation .item.active').removeClass('active');
	jQuery('#calculate .slide-navigation .item[data-step="' + step + '"]').addClass('active');
	calcMobile();
}

// Переход на другой шаг
function goStep(step) {
	updateCalc();
	if (step == window.st || step == 1) {
		showStep(step);
		return true;
	} else if (step == 2) {
		if (window.type != 0) {
			showStep(step);
			return true;
		}
	} else if (step == 3) {
		if (window.regionName != '') {
			showStep(step);
			return true;
		}
	} else if (step == 4) {
		if (window.tubeName != '') {
			showStep(step);
			return true;
		}
	} else if (step == 5) {
		var dp = parseInt(jQuery('#depth-input').val());
		if (depth > 0 || dp > 0) {
			depth = dp;
			showStep(step);
			return true;
		}
	}
	updateCalc();
	return false;
}

// Обновление информации в полях
function updateCalc() {
	// Тип скважины
	if (type == 1) {
		tmp = "Артезианская скважина";
		jQuery('.info-type').text(tmp);
		jQuery('#input-type').val(tmp);
		jQuery('.dis').show();
	} else {
		tmp = "Скважина на песок";
		jQuery('.info-type').text(tmp);
		jQuery('#input-type').val(tmp);
		jQuery('.dis').hide();
	}
	// Регион
	if (regionName != '') {
		jQuery('.info-region').text(regionName);
		jQuery('#input-region').val(regionName);
		jQuery('#avg-depth').text(regionDepth);
		jQuery('#avg-range').text(regionRange);
	}
	// Труба
	if (tubeName != '' && tubePrice != 0) {
		jQuery('.info-tube').text(tubeName);
		jQuery('#input-tube').val(tubeName);
	}
	// Глубина
	var dp = parseInt(jQuery('#depth-input').val());
	if (depth > 0 || dp > 0) {
		depth = dp;
		jQuery('.info-depth').text(depth + ' м');
	}

	//РАСЧЁТ СТОИМОСТИ
	if (type == 1) {
		var price = parseInt(depth) * parseInt(parseInt(tubePrice) + parseInt(regionExpensive));
	} else {
		var price = parseInt(depth) * parseInt(tubeSqPrice);
	}

	jQuery('#total-price').text((price + '').replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1"));
	jQuery('#input-price').val(price);

	/// Обновить
	jQuery('#input-result').val('Скважина: ' + jQuery('#input-type').val() + '; Регион: ' + jQuery('#input-region').val() + '; Труба: ' + jQuery('#input-tube').val() + '; Глубина: ' + jQuery('#depth-input').val() + ' м; Цена: ' + jQuery('#input-price').val() + ' руб.;');

	if ($("#calculate-check-obustrojstvo").is(":checked")) {
		//alert(jQuery('#input-result').val());
		jQuery('#input-result').val(jQuery('#input-result').val() + ' Узнать стоимость обустройства: Да');
	}
}

// Сброс выбора трубы
function dropTubes() {
	jQuery('#calculate .slide3 .element.active').removeClass('active');
	tubeName = '';
	tubePrice = 0;
	tubeSqPrice = 0;
	jQuery('.info-tube').text("-");
}

// Клик по списку шагов
jQuery('#calculate .slide-navigation .item').click(function () {
	goStep(jQuery(this).attr('data-step'));
});

// Клик по кнопке Назад
jQuery('#calculate .slides-navigation .prev').click(function () {
	jQuery('.step-error').remove();
	goStep(jQuery(this).attr('data-step'));
});

// Клик по кнопке Далее
jQuery('#calculate .slides-navigation .btn').click(function () {
	jQuery('.step-error').remove();
	if (!goStep(jQuery(this).attr('data-step'))) {
		jQuery(this).after('<div class="step-error">Выберите все обязательные опции, чтобы перейти к следующему слайду</div>');
		setTimeout(function () { jQuery('.step-error').remove(); }, 4500);
	}
});

// Клик по типу скважины
jQuery('#calculate .slide1 .element').click(function () {
	jQuery('#calculate .slide1 .element').removeClass('active');
	jQuery(this).addClass('active');
	type = jQuery(this).attr('data-type');


	if (type == 1) {
		regionDepth = jQuery('#calculate .slide2 .element span.active').attr('data-depth');
		regionRange = jQuery('#calculate .slide2 .element span.active').attr('data-range');
	} else {
		regionDepth = jQuery('#calculate .slide2 .element span.active').attr('data-squeak-depth');
		regionRange = jQuery('#calculate .slide2 .element span.active').attr('data-squeak-range');
	}

	jQuery('#depth-input').val(regionDepth);
	jQuery('#avg-depth').text(regionDepth);

	dropTubes();
	updateCalc();
});

//Клик по региону
jQuery('#calculate .slide2 .element span').click(function () {
	jQuery('#calculate .slide2 .element span.active').removeClass('active');
	jQuery(this).addClass('active');

	regionRange = jQuery(this).attr('data-range');

	if (type == 1) {
		regionDepth = jQuery(this).attr('data-depth');
		regionRange = jQuery(this).attr('data-range');
	} else {
		regionDepth = jQuery(this).attr('data-squeak-depth');
		tubeSqPrice = jQuery(this).attr('data-squeak-price');
		regionRange = jQuery(this).attr('data-squeak-range');
	}

	regionExpensive = jQuery(this).attr('data-expensive');

	jQuery('#depth-input').val(regionDepth);
	jQuery('#avg-depth').text(regionDepth);

	regionName = jQuery(this).text();
	updateCalc();
});

//Клик по трубе
jQuery('#calculate .slide3 .element').click(function () {
	if (type == 1 || (type == 2 && jQuery(this).hasClass('enabled'))) {
		jQuery('#calculate .slide3 .element.active').removeClass('active');
		jQuery(this).addClass('active');
		tubeName = jQuery(this).children('span').text();
		tubePrice = jQuery(this).attr('data-price');
		jQuery('#tube-image').attr("src", jQuery(this).children('.image').attr("data-img"));
		updateCalc();
	}
});

//Только цифры в поле глубины
$('#depth-input').keypress(function (e) {
	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		return false;
	}
});

//Поле региона
$("#input-region").change(function () {
	regionName = $(this).val();
	regionDepth = 0;
	updateCalc();
});
$("#input-region").keypress(function () {
	jQuery('#calculate .slide2 .element span.active').removeClass('active');
});

//Фикс
jQuery('#depth-input').val('');

//Клик по кнопке сохранения
jQuery('#input-submit').click(function () {
	jQuery('#input-result').val('Скважина: ' + jQuery('#input-type').val() + '; Регион: ' + jQuery('#input-region').val() + '; Труба: ' + jQuery('#input-tube').val() + '; Глубина: ' + jQuery('#depth-input').val() + ' м; Цена: ' + jQuery('#input-price').val() + ' руб.;');


	if ($("#calculate-check-obustrojstvo").is(":checked")) {
		//alert(jQuery('#input-result').val());
		jQuery('#input-result').val(jQuery('#input-result').val() + ' Узнать стоимость обустройства: Да');

	}

});