
import { i18Obj } from './translate.js';

console.log('Score: 85\nВёрстка соответствует макету. Ширина экрана 768px 48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки 15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню 22');

const hamburger = document.querySelector('.header__burger');
const hamburgerMenu = document.querySelector('.header__nav');
console.log(hamburger);
console.log(hamburgerMenu);

// открыть меню на разрешении 768px

function toggleMenu() {
	hamburger.classList.toggle('open');
	hamburgerMenu.classList.toggle('openMenu');
}
hamburger.addEventListener('click', toggleMenu);

//закрытие меню после выбора section
function closeMenu() {
	hamburger.classList.remove('open');
	hamburgerMenu.classList.remove('openMenu');
}
const navLinks = document.querySelectorAll('.list__item');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

//смена изображений в портфолио и цвета кнопки
const portfolioBtnWinter = document.querySelector('.winter');
const portfolioBtnSpring = document.querySelector('.spring');
const portfolioBtnSummer = document.querySelector('.summer');
const portfolioBtnAutumn = document.querySelector('.autumn');

let portfolioImages = document.querySelectorAll('.portfolio__image');

portfolioBtnSummer.addEventListener('click', () => {
	portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`);
	portfolioBtnWinter.classList.remove('active-btn');
	portfolioBtnSpring.classList.remove('active-btn');
	portfolioBtnAutumn.classList.remove('active-btn');
	portfolioBtnSummer.classList.add('active-btn');
});

portfolioBtnWinter.addEventListener('click', () => {
	portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`);
	portfolioBtnSummer.classList.remove('active-btn');
	portfolioBtnSpring.classList.remove('active-btn');
	portfolioBtnAutumn.classList.remove('active-btn');
	portfolioBtnWinter.classList.add('active-btn');
});

portfolioBtnSpring.addEventListener('click', () => {
	portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`);
	portfolioBtnSummer.classList.remove('active-btn');
	portfolioBtnAutumn.classList.remove('active-btn');
	portfolioBtnWinter.classList.remove('active-btn');
	portfolioBtnSpring.classList.add('active-btn');
});
portfolioBtnAutumn.addEventListener('click', () => {
	portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`);
	portfolioBtnSummer.classList.remove('active-btn');
	portfolioBtnSpring.classList.remove('active-btn');
	portfolioBtnWinter.classList.remove('active-btn');
	portfolioBtnAutumn.classList.add('active-btn');
});



//change color theme
const changeColor = document.querySelectorAll('.active-btn, .skills, .section-title, .price__title, .price__description, .portfolio__btn, .portfolo, .price, .video, .wrapper, .footer');
const changeMenuColor = document.querySelector('.header__nav');
const changeBurgerColor = document.querySelector('.header__burger');
const titleLinesBlack = document.querySelectorAll('.title__wrap');
console.log(changeColor);
console.log(changeMenuColor);
console.log(changeBurgerColor);
console.log(titleLinesBlack);


const chooseTheme = document.querySelector('.theme-checker');
chooseTheme.addEventListener('click', () => {
	const newLocal = 'light-theme';
	changeColor.forEach((el) => {
		el.classList.toggle(newLocal);
	})
	if (changeMenuColor.classList.contains('header__nav')) {
		changeMenuColor.classList.toggle('light-menu');
	};
	if (changeBurgerColor.classList.contains('header__burger')) {
		changeBurgerColor.classList.toggle('light-menu');
	};
	titleLinesBlack.forEach((el) => {
		el.classList.toggle('black');
	})
	chooseTheme.classList.remove('active');

});

// page translation

console.log(i18Obj['ru']);
console.log(i18Obj['en']);
const translateToRu = document.querySelector('.ru');
const translateToEn = document.querySelector('.en');
console.log(translateToRu);
console.log(translateToEn);

translateToRu.addEventListener('click', () => {
	let lang = 'ru';
	const words = document.querySelectorAll('[data-i18]');
	words.forEach((el) => {
		el.textContent = i18Obj[lang][el.dataset.i18];
		if (el.placeholder) {
			el.placeholder = i18Obj[lang][el.dataset.i18];
			el.textContent = '';
		}
	})
	translateToEn.classList.remove('active');
	translateToRu.classList.add('active');
});
translateToEn.addEventListener('click', () => {
	let lang = 'en';
	const words = document.querySelectorAll('[data-i18]');
	words.forEach((el) => {
		el.textContent = i18Obj[lang][el.dataset.i18];

	})
	translateToRu.classList.remove('active');
	translateToEn.classList.add('active');
});

