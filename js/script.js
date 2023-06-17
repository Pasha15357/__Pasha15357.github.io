if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
	.test(navigator.userAgent)) {

	document.body.classList.add('_touch');

} else document.body.classList.add('_pc');

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
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight - 20;
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
	})
}