'use strict'
const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	ServicePricesPercent: 0,
	ServicePricesNumber: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},
	init: function () {
		appData.addTitle()
		startBtn.addEventListener('click', appData.start)
		buttonPlus.addEventListener('click', appData.addScreenBlock)
	},
	addTitle: function () {
		document.title = title.textContent
	},
	isError: function() {
		let error = false
		screens.forEach(function (screen) {
			const select = screen.querySelector('select')
			const input = screen.querySelector('input')
			if (select.value === "" || input.value === "") {
				error = true
			}
		})
		return error
	},
	start: function () {
		if (appData.isError()) {
			return
		}
		appData.screens = []
		appData.screenPrice = 0
		appData.ServicePricesPercent = 0
		appData.ServicePricesNumber = 0
		appData.fullPrice = 0
		
		appData.addScreens()
		appData.addServices()

		appData.addPrices()
		// appData.getServicePercentPrices()
		// appData.logger()
		appData.showResult()
	},
	showResult: function() {
		total.value = appData.screenPrice
		totalCountOther.value = appData.ServicePricesPercent + this.ServicePricesNumber
		fullTotalCount.value = appData.fullPrice
	},
	addScreens: function () {
		screens = document.querySelectorAll('.screen')

		screens.forEach(function (screen, index) {
			const select = screen.querySelector('select')
			const input = screen.querySelector('input')
			const selectName = select.options[select.selectedIndex].textContent

			appData.screens.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value,
			})
		})
		console.log(appData.screens)
	},
	addServices: function () {
		otherItemsPercent.forEach(function (item) {
			const check = item.querySelector('input[type=checkbox]')
			const label = item.querySelector('label')
			const input = item.querySelector('input[type=text]')

			if (check.checked) {
				appData.servicesPercent[label.textContent] = +input.value
			}
		})
		otherItemsNumber.forEach(function (item) {
			const check = item.querySelector('input[type=checkbox]')
			const label = item.querySelector('label')
			const input = item.querySelector('input[type=text]')

			if (check.checked) {
				appData.servicesNumber[label.textContent] = +input.value
			}
		})
	},
	addScreenBlock: function () {
		const cloneScreen = screens[0].cloneNode(true)
		console.log(cloneScreen)
		screens[screens.length - 1].after(cloneScreen)
	},
	addPrices: function () {
		for(let screen of appData.screens) {
			appData.screenPrice += +screen.price
		}

		for(let key in appData.servicesNumber) {
			appData.ServicePricesNumber += appData.servicesNumber[key]
		}

		for(let key in appData.servicesPercent) {
			appData.ServicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
		}

		appData.fullPrice = +appData.screenPrice + appData.ServicePricesNumber + appData.ServicePricesPercent
	},
	getServicePercentPrices: function () {
		appData.servicePercentPrice =
			appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
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

appData.init()
