'use strict'

const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?', 'Анимация');
const servicePrice1 = +prompt('Сколько это будет стоить?', '5000');
const service2 = prompt('Какой дополнительный тип услуги нужен?', 'SEO');
const servicePrice2 = +prompt('Сколько это будет стоить?', '10000');
const rollback = 88;
let title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - rollback;
let allServicePrices;

const showTypeOf = function(variable) {
	console.log(variable, typeof(variable));
}

const getRollbackMessage = function(price) {
	if (price >= 30000) {
		return 'Даём скидку 10%';
	} else if (price >= 15000 && price < 30000) {
		return 'Даём скидку 5%';
	} else if (price >= 0 && price < 30000) {
		return 'Скидка не предусмотрена';
	} else {
		return 'Что-то пошло не так';
	}
}
const getAllServicePrices = function() {
	return servicePrice1 + servicePrice2;
}

function getFullPrice() {
	return screenPrice + allServicePrices;
}

function getTitle(str) {
	const trimStr = str.trim(); 
	const fstLtr = trimStr[0].toUpperCase();
	const restLtr = trimStr.slice(1).toLowerCase();
	
	return fstLtr + restLtr;
  }

  function getServicePercentPrices() {
	return fullPrice - rollback;
  }

servicePercentPrice = getServicePercentPrices();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());



