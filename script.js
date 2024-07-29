'use strict'

const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: {},
	start: function () {
		appData.asking()
		appData.addPrices()
		appData.getFullPrice()
		appData.getServicePercentPrices()
		appData.getTitle()
		appData.logger()
	},
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num)
	},

	asking: function () {
		appData.title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки')

		while (appData.isNumber(appData.title)) {
			appData.title = prompt(
				'Как называется ваш проект?',
				'Калькулятор вёрстки'
			)
		}

		for (let i = 0; i < 2; i++) {
			let name = prompt('Какие типы экранов нужно разработать?')
			let price = 0
			do {
				name = prompt('Какие типы экранов нужно разработать?')
				if (name !== null) {
					name = name.trim()
				}
			} while (appData.isNumber(name) || name === null || name === '')

			do {
				price = prompt('Сколько будет стоить данная работа?')
				if (price !== null) {
					price = price.trim()
				}
			} while (price === null || !appData.isNumber(price))
			appData.screens.push({ id: i, name: name, price: price })
		}

		for (let i = 0; i < 2; i++) {
			let name = prompt('Какой дополнительный тип услуги нужен?')
			let price = 0
			do {
				name = prompt('Какой дополнительный тип услуги нужен?')
				if (name !== null) {
					name = name.trim()
				}
			} while (appData.isNumber(name) || name === null || name === '')

			if (name === null) {
				appData.adaptive = confirm('Нужен ли адаптив на сайте?')
				return
			}

			do {
				price = prompt('Сколько это будет стоить?')
				if (price !== null) {
					price = price.trim()
				}
			} while (price === null || !appData.isNumber(price))

			appData.services[name] = +price
		}

		appData.screenPrice = parseFloat(appData.screenPrice)
		appData.adaptive = confirm('Нужен ли адаптив на сайте?')
	},
	addPrices: function () {
		for (let screen of appData.screens) {
			appData.screenPrice += +screen.price
		}

		for (let key in appData.services) {
			appData.allServicePrices += appData.services[key]
		}
	},
	getFullPrice: function () {
		appData.fullPrice = +appData.screenPrice + appData.allServicePrices
	},
	getServicePercentPrices: function () {
		appData.servicePercentPrice =
			appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
	},
	getTitle: function () {
		if (appData.title === null) {
			return
		}
		appData.title =
			appData.title.trim()[0].toUpperCase() +
			appData.title.trim().slice(1).toLowerCase()
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
	logger: function () {
		console.log(appData.fullPrice)
		console.log(appData.servicePercentPrice)
		console.log(appData.screens)
	},
}

appData.start()
