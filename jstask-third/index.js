
"use strict";
console.log(` Score 60
Вёрстка (10)
При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик (10)
Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали (10)
По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения (10)
Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр (10)
Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов (10)
`);
const square = document.querySelector('.main__play');
console.log(square);
let move = 0;// ставить крестик или нолик
let result = '';
let moveNumber = 0; // количество ходов
let crossNumber = 0;
let zeroNumber = 0;
let friendshipNumber = 0;
const audio = new Audio();
let isPlay = true;
const audioSounds = ['move', 'winner'];



const resultWindow = document.querySelector('.main__wrapper');
const mainResult = document.querySelector('.main__result');
const whoWin = document.querySelector('.main__content');
const btn = document.querySelector('.btn');
const cross = document.querySelector('.cross');
const zero = document.querySelector('.zero');
const friendship = document.querySelector('.friendship');


square.addEventListener('click', event => {
	if (event.target.className == 'main__box' && event.target.innerHTML == '') {
		move % 2 === 0 ? event.target.innerHTML = "X" : event.target.innerHTML = "0";
		move++;
		moveNumber++;
		moveSound();
		checkWinner();
	}

});

const checkWinner = () => {
	const allBoxes = document.querySelectorAll('.main__box');
	const array = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < array.length; i++) {
		if (allBoxes[array[i][0]].innerHTML == "X" && allBoxes[array[i][1]].innerHTML == "X" && allBoxes[array[i][2]].innerHTML == "X") {
			result = 'крестики';
			crossNumber++;
			winnerSound()
			showWinner(result);
			showTableResult(crossNumber);

		} else if (allBoxes[array[i][0]].innerHTML == "0" && allBoxes[array[i][1]].innerHTML == "0" && allBoxes[array[i][2]].innerHTML == "0") {
			result = 'нолики';
			zeroNumber++;
			winnerSound()
			showWinner(result);
			showTableResult(zeroNumber);
		}
	}
	if (((moveNumber === 9) && (result != 'крестики')) && ((moveNumber === 9) && (result != 'нолики'))) {
		result = 'Ничья';
		friendshipNumber++;
		winnerSound()
		showWinner(result);
		showTableResult(friendshipNumber);
	}

};

const showWinner = (checkWinner) => {
	resultWindow.classList.add('active');
	square.style.display = 'none';
	if (result == 'Ничья') {
		whoWin.innerHTML = `${checkWinner} Количество ходов ${moveNumber}`;
	} else {
		whoWin.innerHTML = `Победили ${checkWinner}! Количество ходов ${moveNumber}`;
	}

};

const closeResultWindow = () => {
	resultWindow.classList.remove('active');
	square.style.display = 'flex';
	location.reload();


};

btn.addEventListener('click', closeResultWindow);

const showTableResult = () => {
	cross.textContent = crossNumber;
	zero.textContent = zeroNumber;
	friendship.textContent = friendshipNumber;

}

//local storage

function setLocalStorage() {
	localStorage.setItem('cross', crossNumber);
	localStorage.setItem('zero', zeroNumber);
	localStorage.setItem('friendship', friendshipNumber);
	localStorage.setItem('sound', isPlay);
	if ((Number(crossNumber) + Number(zeroNumber) + Number(friendshipNumber)) >= 11) {
		clearLocalStorage();
	}
};
window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {
	if (localStorage.getItem('cross')) {
		crossNumber = localStorage.getItem('cross');
		cross.textContent = crossNumber;
	}
	if (localStorage.getItem('zero')) {
		zeroNumber = localStorage.getItem('zero');
		zero.textContent = zeroNumber;
	}
	if (localStorage.getItem('friendship')) {
		friendshipNumber = localStorage.getItem('friendship');
		friendship.textContent = friendshipNumber;
	}

};
window.addEventListener('load', getLocalStorage);

function clearLocalStorage() {
	localStorage.clear();
};

// sounds


function moveSound() {
	if (isPlay) {
		audio.src = `./assets/audio/${audioSounds[0]}.mp3`;
		audio.play();
	}
};
function winnerSound() {
	if (isPlay) {
		audio.src = `./assets/audio/${audioSounds[1]}.mp3`;
		audio.play();
	}
};

const sound = document.getElementById('yes');
const noSound = document.getElementById('no');

sound.addEventListener('click', () => {
	isPlay = true;


});
noSound.addEventListener('click', () => {
	isPlay = false;

}
);

