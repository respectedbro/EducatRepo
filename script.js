'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 88;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
	title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
	screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
	
	do {
		screenPrice = prompt('Сколько будет стоить данная работа?');
		screenPrice = screenPrice.trim();
	} while (!isNumber(screenPrice))

	screenPrice = parseFloat(screenPrice);
	adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
	let sum = 0;

	for (let i = 0; i < 2; i++) {
		prompt('Какой дополнительный тип услуги нужен?'); 

		let servicePrice;
		do {
			servicePrice = prompt('Сколько это будет стоить?');
			servicePrice = servicePrice.trim();
		} while (!isNumber(servicePrice))

		sum += parseFloat(servicePrice);
	}
	return sum;
}

const showTypeOf = function(variable) {
	console.log(variable, typeof(variable));
}

function getFullPrice() {
	return screenPrice + allServicePrices;
}

function getServicePercentPrices() {
	return fullPrice - rollback;
}

const getTitle = function() {
	return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
}

const getRollbackMessage = function(price) {
	if (price >= 30000) {
		return 'Даём скидку 10%';
	} else if (price >= 15000 && price < 30000) {
		return 'Даём скидку 5%';
	} else if (price >= 0 && price < 15000) {
		return 'Скидка не предусмотрена';
	} else {
		return 'Что-то пошло не так';
	}
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(screens.length);
console.log(getServicePercentPrices());

console.log(`Стоимость вёрстки экранов ${screenPrice} юани и Стоимость разработки сайта ${fullPrice} юани`);