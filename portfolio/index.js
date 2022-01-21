"use strict";
console.log('Score: 85\nВёрстка соответствует макету. Ширина экрана 768px 48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки 15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню 22');

const hamburger = document.querySelector('.header__burger');
const hamburgerMenu = document.querySelector('.header__nav');
console.log(hamburger);
console.log(hamburgerMenu);

function toggleMenu() {
	hamburger.classList.toggle('open');
	hamburgerMenu.classList.toggle('openMenu');
}
hamburger.addEventListener('click', toggleMenu);


function closeMenu() {
	hamburger.classList.remove('open');
	hamburgerMenu.classList.remove('openMenu');
}
const navLinks = document.querySelectorAll('.list__item');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

