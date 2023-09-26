if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
	.test(navigator.userAgent)) {

	document.body.classList.add('_touch'); // Добавляем класс '_touch' к телу страницы, если пользователь заходит с мобильного устройства
} else {
	document.body.classList.add('_pc'); // Добавляем класс '_pc' к телу страницы, если пользователь заходит с компьютера
}

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
		scrollToTopButton.style.display = 'block'; // Показываем кнопку "Прокрутить вверх", если пользователь прокрутил страницу вниз
	} else {
		scrollToTopButton.style.display = 'none'; // Скрываем кнопку "Прокрутить вверх", если пользователь находится вверху страницы
	}
}
window.addEventListener('scroll', toggleScrollToTop);
scrollToTopButton.addEventListener('click', function (e) {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth' // Плавно прокручиваем страницу вверх
	});
});



// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	function onMenuLinkClick(e) { // Обработчик клика на ссылку в меню
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
				behavior: "smooth" // Плавно прокручиваем страницу к выбранному блоку
			});
			e.preventDefault();
		}
	}
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick); // Добавляем обработчик клика на каждую ссылку в меню
	});
}


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) { // Обработчик клика на иконку меню
		document.body.classList.toggle('_lock'); // Переключаем класс '_lock' у тела страницы
		iconMenu.classList.toggle('_active'); // Переключаем класс '_active' у иконки меню
		menuBody.classList.toggle('_active'); // Переключаем класс '_active' у меню
		if (document.body.style.overflow == 'hidden') {
			document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
		}
		else {
			document.body.style.overflow = 'hidden' // Отключаем прокрутку страницы
		}
		if (scrollToTopButton.style.display == 'none' && window.scrollY > 0) {
			scrollToTopButton.style.display = 'block'; // Показываем кнопку "Прокрутить вверх", если пользователь прокрутил страницу вниз и меню открыто
		} else {
			scrollToTopButton.style.display = 'none'; // Скрываем кнопку "Прокрутить вверх", если пользователь находится вверху страницы или меню закрыто
		}
	})
}


document.addEventListener('DOMContentLoaded', function () {
	var popup = document.getElementById('popup');
	var closeBtn = document.getElementById('close-btn');

	function openPopup() {
		popup.style.display = 'flex'; // Открываем pop-up окно
	}

	function closePopup() {
		popup.style.display = 'none'; // Закрываем pop-up окно
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


// Инициализация Swiper
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next", // Кнопка "Следующий слайд"
		prevEl: ".swiper-button-prev", // Кнопка "Предыдущий слайд"
	},
	pagination: {
		el: ".swiper-pagination", // Пагинация
	},
	mousewheel: true,
	keyboard: true,
});

// Скрытие прелоадера после загрузки страницы
window.addEventListener('load', function () {
	var preloader = document.getElementById('preloader');
	preloader.style.display = 'none';
});

// Карусель
var carousels = document.querySelectorAll('#carousels .carousel');
var currentCarousel = 0;
var carouselInterval = setInterval(nextCarousel, 5000); // Интервал между картинками

function nextCarousel() {
	carousels[currentCarousel].className = 'carousel';
	currentCarousel = (currentCarousel + 1) % carousels.length;
	carousels[currentCarousel].className = 'carousel demonstration';
}

// Переключение отзывов
const testimonials = document.querySelector('.testimonials');
const scroller = testimonials.querySelector('.scroller');
const nextBtn = testimonials.querySelector('.btn.next');
const prevBtn = testimonials.querySelector('.btn.prev');
const itemWidth = testimonials.querySelector('.item').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
	if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth)) {
		// Позиция прокрутки не находится в начале последнего элемента
		scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
	} else {
		// Достигнут последний элемент. Вернуться к первому элементу, установив позицию прокрутки в 0
		scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}
}

function scrollToPrevItem() {
	if (scroller.scrollLeft != 0) {
		// Позиция прокрутки не находится в начале первого элемента
		scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
	} else {
		// Это первый элемент. Перейти к последнему элементу, установив позицию прокрутки в ширину блока scroller
		scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
	}
}
