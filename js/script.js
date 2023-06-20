if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
	.test(navigator.userAgent)) {

	document.body.classList.add('_touch');

} else document.body.classList.add('_pc');

const header = document.querySelector('.header');
const content = document.querySelector('.cta');

// Функция для обновления отступа секции
function updateSectionPaddingTop() {
	const headerHeight = header.offsetHeight; // Получаем высоту шапки
	content.style.paddingTop = 40 + headerHeight + 'px'; // Применяем отступ для секции
}

// Вызываем функцию при загрузке страницы и при изменении размеров окна
window.addEventListener('load', updateSectionPaddingTop);
window.addEventListener('resize', updateSectionPaddingTop);

document.addEventListener('DOMContentLoaded', () => {
	const inputElement = document.querySelector('input') // ищем наш единственный input
	const maskOptions = { // создаем объект параметров
		mask: '+{375} (00) 000-00-00' // задаем единственный параметр mask
	}
	IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
})

// Получаем ссылку и добавляем обработчик события клика
var scrollToTopButton = document.querySelector('.scroll-to-top');
function toggleScrollToTop() {
	if (window.scrollY > 0) {
		scrollToTopButton.style.display = 'block';
	} else {
		scrollToTopButton.style.display = 'none';
	}
}
window.addEventListener('scroll', toggleScrollToTop);
scrollToTopButton.addEventListener('click', function (e) {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});



//Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	function onMenuLinkClick(e) { // Исправлено
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight - 15;
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
				document.body.style.overflow = 'auto';
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick); // Исправлено
	});
}


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		if (document.body.style.overflow == 'hidden') {
			document.body.style.overflow = 'auto';
		}
		else {
			document.body.style.overflow = 'hidden'
		}
		if (scrollToTopButton.style.display == 'none' && window.scrollY > 0) {
			scrollToTopButton.style.display = 'block';
		} else {
			scrollToTopButton.style.display = 'none';
		}
	})
}


document.addEventListener('DOMContentLoaded', function () {
	var popup = document.getElementById('popup');
	var closeBtn = document.getElementById('close-btn');

	function openPopup() {
		popup.style.display = 'flex';
	}

	function closePopup() {
		popup.style.display = 'none';
	}

	closeBtn.addEventListener('click', closePopup);
	popup.addEventListener('click', function (event) {
		if (event.target === popup) {
			closePopup();
		}
	});

	// Открытие pop-up окна при необходимости
	// Например, по щелчку на кнопке
	var openBtn = document.getElementById('open-btn');
	openBtn.addEventListener('click', openPopup);
});


// Получаем элементы
const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-pane');

// Функция для обработки клика на таб
function handleTabClick() {
	// Удаляем класс активного таба у всех элементов
	tabItems.forEach(item => {
		item.classList.remove('active');
	});

	// Скрываем все контентные панели
	tabContent.forEach(content => {
		content.classList.remove('active');
	});

	// Добавляем класс активного таба и показываем соответствующую контентную панель
	this.classList.add('active');
	const tabId = this.getAttribute('data-tab');
	const activeTabContent = document.getElementById(tabId);
	activeTabContent.classList.add('active');
}

// Добавляем обработчик клика на каждый таб
tabItems.forEach(item => {
	item.addEventListener('click', handleTabClick);
});
