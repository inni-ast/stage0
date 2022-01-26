"use strict";
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

//смена изображений в портфолио
const portfolioBtnWinter = document.querySelector('.winter');
const portfolioBtnSpring = document.querySelector('.spring');
const portfolioBtnSummer = document.querySelector('.summer');
const portfolioBtnAutumn = document.querySelector('.autumn');
let portfolioImages = document.querySelectorAll('.portfolio__image');

portfolioBtnSummer.addEventListener('click', () => {
	portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`);
});

portfolioBtnWinter.addEventListener('click', () => {
	portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`);
});

portfolioBtnSpring.addEventListener('click', () => {
	portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`);
});
portfolioBtnAutumn.addEventListener('click', () => {
	portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`);
});


