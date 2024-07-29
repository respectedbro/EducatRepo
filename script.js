'use strict'

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num)
}

const guessNumber = function (
	botNum = Math.ceil(Math.random() * 100),
	count = 10
) {
	console.log(botNum)

	const userNum = prompt('Угадай число, введи число от 1 до 100')

	if (userNum === null) {
		alert('Игра окончена')
		return
	}

	if (!isNumber(userNum) || userNum === '') {
		alert('Введи число!')
		return guessNumber(botNum, count)
	}

	const userNumParsed = parseFloat(userNum)
	count--

	if (userNumParsed > botNum) {
		alert(`Загаданное число меньше, осталось попыток ${count}`)
	} else if (userNumParsed < botNum) {
		alert(`Загаданное число больше, осталось попыток ${count}`)
	} else {
		const play = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
		if (play) {
			return guessNumber(Math.ceil(Math.random() * 100), 10)
		} else {
			alert('Игра окончена')
			return
		}
	}

	if (count <= 0) {
		if (confirm('Попытки закончились, хотите сыграть еще?')) {
		  return guessNumber(Math.ceil(Math.random() * 100), 10);
		} else {
		  alert('Игра окончена');
		  return;
		}
	  }

	return guessNumber(botNum, count)
}

guessNumber()
