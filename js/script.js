'use strict'
const mainTitle = document.getElementsByTagName('h1')[0]
const totalBtns = document.getElementsByClassName('handler_btn')
const addScreensBtn = document.querySelector('.screen-btn')
const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('.rollback input[type="range"]')
const rangeValue = document.querySelector('.rollback span')
// 7 задание не особо понятно
const totalInput1 = document.getElementsByClassName('total-input')[0]
const totalInput2 = document.getElementsByClassName('total-input')[1]
const totalInput3 = document.getElementsByClassName('total-input')[2]
const totalInput4 = document.getElementsByClassName('total-input')[3]
const totalInput5 = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: [],
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
			let name
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
			let name
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

			appData.services.push({ id: i, name: name, price: price })
		}

		appData.screenPrice = parseFloat(appData.screenPrice)
		appData.adaptive = confirm('Нужен ли адаптив на сайте?')
	},
	addPrices: function () {
		appData.screenPrice = appData.screens.reduce((sum, elem) => {
			return sum + parseFloat(elem.price)
		}, 0)

		appData.allServicePrices = appData.services.reduce((sum, elem) => {
			return sum + parseFloat(elem.price)
		}, 0)
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
		console.log(this.services)
	},
}

// appData.start()
