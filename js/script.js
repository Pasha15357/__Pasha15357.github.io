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

