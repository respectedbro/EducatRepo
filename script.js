const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const guessNumber = function() {
  let userNum = prompt('Угадай число, введи число от 1 до 100');
  const botNum = Math.ceil(Math.random() * 100);
  console.log(botNum);
  if(userNum === null) {
    alert('Игра окончена');
    return;
  } 
  
  while(!isNumber(userNum) || userNum === '') {
    userNum = prompt('Введи число!');
  }

  userNum = parseFloat(userNum);

  if (userNum > botNum) {
    alert('Загаданное число больше');
    guessNumber()
  } else if (userNum < botNum) {
    alert('Загаданное число меньше');
    guessNumber()
  } else {
    alert('Вы угадали');
    return;
  }
}
guessNumber()