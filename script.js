'use strict'

const appData = {
	title: '',
	screens: '',
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	service1: '',
	service2: '',

	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num)
	},
	isString: function (str) {
		return typeof str === 'string' && str.trim() !== ''
	},
	asking: function () {
		do {
			appData.title = prompt(
				'Как называется ваш проект?',
				'Калькулятор вёрстки'
			)
			if (appData.title === null) {
				alert('Введите ответ')
			}
		} while (!appData.isString(appData.title))

		do {
			appData.screens = prompt(
				'Какие типы экранов нужно разработать?',
				'Простые, Сложные, Интерактивные'
			)
			if (appData.screens === null) {
				alert('Введите ответ')
			}
		} while (!appData.isString(appData.screens))

		do {
			appData.screenPrice = prompt('Сколько будет стоить данная работа?')
			if (appData.screenPrice !== null) {
				appData.screenPrice = appData.screenPrice.trim()
			}
		} while (
			appData.screenPrice === null ||
			!appData.isNumber(appData.screenPrice)
		)

		appData.screenPrice = parseFloat(appData.screenPrice)
		appData.adaptive = confirm('Нужен ли адаптив на сайте?')
	},
	getAllServicePrices: function () {
		let sum = 0

		for (let i = 0; i < 2; i++) {
			let service
			do {
				service = prompt('Какой дополнительный тип услуги нужен?')
				if (service === null) {
					alert('Введите ответ')
				}
			} while (service === null || !appData.isString(service))

			if (i === 0) {
				appData.service1 = service
			} else if (i === 1) {
				appData.service2 = service
			}

			let servicePrice
			do {
				servicePrice = prompt('Сколько это будет стоить?')
				if (servicePrice !== null) {
					servicePrice = servicePrice.trim()
				}
			} while (servicePrice === null || !appData.isNumber(servicePrice))

			sum += parseFloat(servicePrice)
		}
		return sum
	},
	getFullPrice: function () {
		return +appData.screenPrice + appData.allServicePrices
	},
	getServicePercentPrices: function () {
		return appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
	},
	getTitle: function () {
		return (
			appData.title.trim()[0].toUpperCase() +
			appData.title.trim().slice(1).toLowerCase()
		)
	},
	getRollbackMessage: function (price) {
		if (price >= 30000) {
			return 'Даём скидку 10%'
		} else if (price >= 15000 && price < 30000) {
			return 'Даём скидку 5%'
		} else if (price >= 0 && price < 15000) {
			return 'Скидка не предусмотрена'
		} else {
			return 'Что-то пошло не так'
		}
	},
	start: function () {
		appData.asking()
		appData.allServicePrices = appData.getAllServicePrices()
		appData.fullPrice = appData.getFullPrice()
		appData.servicePercentPrice = appData.getServicePercentPrices()
		appData.title = appData.getTitle()
		appData.logger()
	},
	logger: function () {
		console.log(appData.fullPrice)
		console.log(appData.servicePercentPrice)
		for (let key in appData) {
			console.log(key)
		}
	},
}

appData.start()
