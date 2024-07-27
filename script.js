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

const isString = function(str) {
	return typeof str === 'string' && str.trim() !== '';
}

const asking = function() {
	do {
		title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
		if (title === null) {
			alert('Введите ответ');
		}
	} while (!isString(title));
	
	do {
		screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
		if (screens === null) {
			alert('Введите ответ');
		}
	} while (!isString(screens));

	do {
		screenPrice = prompt('Сколько будет стоить данная работа?');
		if (screenPrice !== null) {
			screenPrice = screenPrice.trim();
		}
	} while (screenPrice === null || !isNumber(screenPrice));

	screenPrice = parseFloat(screenPrice);
	adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
	let sum = 0;

	for (let i = 0; i < 2; i++) {
		let service;
		do {
			service = prompt('Какой дополнительный тип услуги нужен?');
			if (service === null) {
				alert('Введите ответ');
			}
		} while (service === null || !isString(service));

		if (i === 0) {
			service1 = service;
		} else if (i === 1) {
			service2 = service;
		}

		let servicePrice;
		do {
			servicePrice = prompt('Сколько это будет стоить?');
			if (servicePrice !== null) {
				servicePrice = servicePrice.trim();
			}
		} while (servicePrice === null || !isNumber(servicePrice));

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