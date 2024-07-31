const data = new Date();
const year = data.getFullYear()
let month = data.getMonth();
let today = data.getDay();
let hours = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getMinutes();

const weekArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const newData = document.createElement('div');
newData.textContent = data;
document.body.append(newData);


if(month === 0) {
	month === 1;
} else {
	month += 1;
}
if (today === 0) {
	today = 6;
} else {
	today -= 1;
}
const dataNow = document.createElement('div');
dataNow.style.display = 'flex'
dataNow.style.justifyContent = 'flex-start'
document.body.append(dataNow);

weekArr.forEach((elem, index) => {
	if (index === today) {
		let day = document.createElement('p');
		day.textContent = `Сегодня ${elem},`
		dataNow.append(day)	
	} 
})
monthArr.forEach((elem, index) => {
	if (index === today) {
		let monthNow = document.createElement('p');
		monthNow.textContent = `${index} ${elem} ${year} года ${hours} часов ${minutes} минут ${seconds} секунд`
		dataNow.append(monthNow)	
	} 
})






