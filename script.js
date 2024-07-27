'use strict'
let count = 10;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const guessNumber = function () {
  const botNum = Math.ceil(Math.random() * 100);
  console.log(botNum);
  while (count > 0) {
    let userNum = prompt('Угадай число, введи число от 1 до 100');

    if (userNum === null) {
      alert('Игра окончена');
      return;
    }

    while (!isNumber(userNum) || userNum === '') {
      userNum = prompt('Введи число!');
    }

    userNum = parseFloat(userNum);
    count--;

    if (userNum > botNum) {
      alert(`Загаданное число больше, осталось попыток ${count}`);
    } else if (userNum < botNum) {
      alert(`Загаданное число меньше, осталось попыток ${count}`);
    } else {
      const play = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"');
      if (play) {
        count = 10;
      } else {
        return;
      }
    }

    if (count <= 0) {
      const play = confirm('Попытки закончились, хотите сыграть еще?');
      if (play) {
        count = 10;
        guessNumber();
      } else {
        alert('Игра окончена')
        return;
      }
    }
  }
}
guessNumber();