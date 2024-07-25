'use strict'

let title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Анимация');
let servicePrice1 = +prompt('Сколько это будет стоить?', '5000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'SEO');
let servicePrice2 = +prompt('Сколько это будет стоить?', '10000');

let rollback = 88;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

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

const getTitle = function() {
	return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
  }

  function getServicePercentPrices() {
	return fullPrice - rollback;
  }

title = getTitle();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());



