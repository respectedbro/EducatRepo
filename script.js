'use strict'

const weekArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let data = new Date();
let year = data.getFullYear()
let month = data.getMonth() + 1;
let today = data.getDay();
let hours = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getMinutes();
let formatDate;
let formatTime;

console.log(today);
const dataNow = document.createElement('div');
dataNow.style.display = 'flex';
dataNow.style.justifyContent = 'flex-start';



const formatMyDate = function (hours) {
	if (hours % 10 === 1 && hours % 100 !== 11) {
		return 'час';
} else if (hours % 10 >= 2 && hours % 10 <= 4 && (hours % 100 < 10 || hours % 100 >= 20)) {
		return 'часа';
} else {
		return 'часов';
}
}


const addZero = function(num) {
	if(num < 10) {
		'0' + num;
	} else {
		num;
	}
	return num;
}

// if(month === 0) {
// 	month === 1;
// } else {
// 	month += 1;
// }
// if (today === 0) {
// 	today = 6;
// } else {
// 	today -= 1;
// }

// A)
setInterval(function(){
	
}, 1000)
weekArr.forEach((elem, index) => {
	if (index === today) {
		let day = document.createElement('p');
		day.textContent = `Сегодня ${elem},`;
		dataNow.append(day)	;
	} 
})
monthArr.forEach((elem, index) => {
	if (index === today) {
		let date= document.createElement('p');
		date.textContent = `${index} ${elem} ${year} года ${hours} часов ${minutes} минут ${seconds} секунд`;
		dataNow.append(date)	;
	} 
})

// Б)

if (today < 10) {
	formatDate = '0' + today + '.';
} else {
	formatDate = today + '.';
}

if (month < 10) {
	formatDate += '0' + month + '.';
} else {
	formatDate += month + '.';
}

formatDate += year;


if (hours < 10) {
	formatTime = '0' + hours + ':';
} else {
	formatTime = hours + ':';
}

if (minutes < 10) {
	formatTime += '0' + minutes + ':';
} else {
	formatTime += minutes + ':';
}

if (seconds < 10) {
	formatTime += '0' + seconds;
} else {
	formatTime += seconds;
}


document.body.append(dataNow);
dataNow.append(formatDate)
dataNow.append(formatTime) // что-то я запутался, переделаю позже. Можно же доделать или переделать позже?))


