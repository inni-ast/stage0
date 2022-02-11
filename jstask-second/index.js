
"use strict";
console.log(` Score 60
Вёрстка (10)
При загрузке страницы приложения отображается рандомная цитата (10)
При перезагрузке страницы цитата обновляется (заменяется на другую) (10)
Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) (10)
Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или \nменяется фоновый цвет страницы, или проигрывается звук и т.д * (10)
Можно выбрать один из двух языков отображения цитат: en/ru или en/be (10)
`);

const quotesBy = './belarusian_quotes.json';
const quotesRu = './quotes.json';
const quotesEn = './en-quotes.json';
let lang = quotesBy;

async function getQuotes() {
	const res = await fetch(lang);
	const data = await res.json();
	console.log(data);
	function showData(data) {
		const quote = document.querySelector('.main__text');
		quote.textContent = data[Math.floor(Math.random() * data.length)].text;
		console.log(quote.textContent);
	}
	showData(data);
}
getQuotes();

const btn = document.querySelector('.main__btn');
btn.addEventListener('click', getQuotes);



btn.addEventListener('click', changeImage);
//change images
const image = document.querySelector('.image__item');
function changeImage() {
	image.src = `./assets/img/${Math.round(Math.random() * 9)}.jpg`;
}

// page translation
const languageRu = document.querySelector('.ru');
const languageBy = document.querySelector('.by');
const languageEn = document.querySelector('.en');

languageRu.addEventListener('click', () => {

	if (lang == quotesBy || lang == quotesEn) {
		lang = quotesRu;
		getQuotes();
	}
	languageEn.classList.remove('active');
	languageBy.classList.remove('active');
	languageRu.classList.add('active');
}
);
languageBy.addEventListener('click', () => {
	if (lang == quotesRu || lang == quotesEn) {
		lang = quotesBy;
		getQuotes();
	}
	languageRu.classList.remove('active');
	languageEn.classList.remove('active');
	languageBy.classList.add('active');
});

languageEn.addEventListener('click', () => {
	if (lang == quotesRu || lang == quotesBy) {
		lang = quotesEn;
		getQuotes();
	}
	languageRu.classList.remove('active');
	languageBy.classList.remove('active');
	languageEn.classList.add('active');
});













