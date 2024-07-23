'use strict'

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', '1200');
const rollback = 88;
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);

switch(true) {
	case fullPrice >= 30000:
		alert('Даем скидку в 10%');
		break;
	case fullPrice >= 15000 && fullPrice < 30000:
		alert('Даем скидку в 5%');
		break;
	case fullPrice < 15000 && fullPrice >= 0:
		alert('Скидка не предусмотрена');
		break;
	default:
		alert('Что то пошло не так');
}

// console.log(typeof(title));
// console.log(typeof(fullPrice));
// console.log(typeof(adaptive));
// console.log(screens.length);
// console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
// console.log(`Стоимость верстки экранов ${fullPrice} долларов`);
// console.log(screens.toLocaleLowerCase().split(', '));
// console.log((fullPrice * (rollback/100)));
