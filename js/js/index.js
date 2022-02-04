
"use strict";

console.log('Портфолио 3 часть. Score: 75\nСмена изображений в секции portfolio +25\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25');
// add sounds for play button

let isPlay = false;
let playNum = 0;
const audioSounds = ['drozd', 'slavka', 'javoronok', 'solovey', 'zarynka'];
//track list change
// function playNext() {
// 	playNum = playNum + 1;
// 	playAudio(playNum);
// 	if (playNum < 0) {
// 		playNum = 
// 	}

// }
// function playPrev() {
// 	playNum = playNum - 1;
// 	playAudio(playNum);
// }

const playBtn = document.querySelector('.play__button');
const audio = new Audio();

function playAudio(sound) {
	let birdSound = sound;
	if (birdSound == 'solovey') {
		audio.src = `../assets/audio/${audioSounds[3]}.mp3`;
	} else if (birdSound == 'zarynka') {
		audio.src = `../assets/audio/${audioSounds[4]}.mp3`;
	} else if (birdSound == 'javoronok') {
		audio.src = `../assets/audio/${audioSounds[2]}.mp3`;
	} else if (birdSound == 'slavka') {
		audio.src = `../assets/audio/${audioSounds[1]}.mp3`;
	} else {
		audio.src = `../assets/audio/${audioSounds[0]}.mp3`;
	}
	if (!isPlay) {
		audio.currentTime = 0;
		playBtn.classList.add('pause');
		audio.play();
		isPlay = true;
	} else {
		audio.pause();
		playBtn.classList.remove('pause');
		isPlay = false;
	}
};
playBtn.addEventListener('click', playAudio);


// buttons for birds
const allBtnBirds = document.querySelector('.header__list');
console.log(allBtnBirds);
const currentImg = document.querySelector('.video__item');
const nightingale = document.querySelector('.nightingale');
const thrush = document.querySelector('.thrush');
const robin = document.querySelector('.robin');
const lark = document.querySelector('.lark');
const warbler = document.querySelector('.warbler');

function changeImage(event) {

	if (event.target.classList.contains('nightingale')) {
		currentImg.src = `../assets/img/solovey.jpg`;
		warbler.classList.remove('active');
		lark.classList.remove('active');
		thrush.classList.remove('active');
		robin.classList.remove('active');
		event.target.classList.add('active');
		playAudio('solovey');

	} else if (event.target.classList.contains('robin')) {
		currentImg.src = `../assets/img/zarynka.jpg`;
		event.target.classList.add('active');
		warbler.classList.remove('active');
		lark.classList.remove('active');
		thrush.classList.remove('active');
		nightingale.classList.remove('active');
		playAudio('zarynka');


	} else if (event.target.classList.contains('lark')) {
		currentImg.src = `../assets/img/javoronok.jpg`;
		event.target.classList.add('active');
		warbler.classList.remove('active');
		thrush.classList.remove('active');
		nightingale.classList.remove('active');
		robin.classList.remove('active');
		playAudio('javoronok');

	} else if (event.target.classList.contains('warbler')) {
		currentImg.src = `../assets/img/slavka.jpg`;
		event.target.classList.add('active');
		thrush.classList.remove('active');
		nightingale.classList.remove('active');
		lark.classList.remove('active');
		robin.classList.remove('active');
		playAudio('slavka');

	} else if (event.target.classList.contains('thrush')) {
		currentImg.src = `../assets/img/drozd.jpg`;
		event.target.classList.add('active');
		nightingale.classList.remove('active');
		lark.classList.remove('active');
		robin.classList.remove('active');
		warbler.classList.remove('active');
		playAudio('drozd');
	}
};
allBtnBirds.addEventListener('click', changeImage);




