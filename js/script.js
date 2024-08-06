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
	rollback: 0,
	ServicePricesPercent: 0,
	ServicePricesNumber: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},
	init: function () {
		this.addTitle()
		startBtn.addEventListener('click', this.start.bind(this))
		buttonPlus.addEventListener('click', this.addScreenBlock)
		inputRange.addEventListener('input', this.addRange)
		resetBtn.addEventListener('click', this.reset.bind(this))
	},
	addTitle: function () {
		document.title = title.textContent
	},
	isError: function () {
		let error = false
		screens.forEach(screen => {
			const select = screen.querySelector('select')
			const input = screen.querySelector('input')

			if (select.value === '' || input.value === '') {
				error = true
			}
		})
		return error
	},
	addRange: function () {
		inputRangeValue.textContent = inputRange.value + '%'
		this.rollback = Math.round(inputRange.value)

		if (this.fullPrice > 0) {
			this.servicePercentPrice =
				this.fullPrice - this.fullPrice * (this.rollback / 100)
			totalCountRollback.value = this.servicePercentPrice
		}
	},
	start: function () {
		if (this.isError()) {
			return
		}

		this.changeButton()
		this.disabledChange()
		this.addScreens()
		this.addServices()

		this.addPrices()
		// this.getServicePercentPrices()
		// this.logger()
		this.showResult()
	},
	showResult: function () {
		total.value = this.screenPrice
		totalCountOther.value = this.ServicePricesPercent + this.ServicePricesNumber
		fullTotalCount.value = this.fullPrice
		totalCountRollback.value = this.servicePercentPrice
	},
	addScreens: function () {
		screens = document.querySelectorAll('.screen')

		screens.forEach((screen, index) => {
			const select = screen.querySelector('select')
			const input = screen.querySelector('input')
			const selectName = select.options[select.selectedIndex].textContent

			appData.screens.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value,
				count: +input.value,
			})
		})
		console.log(this.screens)
	},
	addServices: function () {
		otherItemsPercent.forEach(item => {
			const check = item.querySelector('input[type=checkbox]')
			const label = item.querySelector('label')
			const input = item.querySelector('input[type=text]')

			if (check.checked) {
				this.servicesPercent[label.textContent] = +input.value
			}
		})
		otherItemsNumber.forEach(item => {
			const check = item.querySelector('input[type=checkbox]')
			const label = item.querySelector('label')
			const input = item.querySelector('input[type=text]')

			if (check.checked) {
				this.servicesNumber[label.textContent] = +input.value
			}
		})
	},
	addScreenBlock: function () {
		const cloneScreen = screens[0].cloneNode(true)
		console.log(cloneScreen)
		screens[screens.length - 1].after(cloneScreen)
		screens = document.querySelectorAll('.screen')

		const input = cloneScreen.querySelector('input')
		input.value = ''
	},
	addPrices: function () {
		totalCount.value = this.screens.reduce(
			(total, screen) => total + screen.count,
			0
		)

		for (let screen of this.screens) {
			this.screenPrice += +screen.price
		}

		for (let key in this.servicesNumber) {
			this.ServicePricesNumber += this.servicesNumber[key]
		}

		for (let key in this.servicesPercent) {
			this.ServicePricesPercent +=
				this.screenPrice * (this.servicesPercent[key] / 100)
		}

		this.fullPrice =
			+this.screenPrice + this.ServicePricesNumber + this.ServicePricesPercent

		this.servicePercentPrice =
			this.fullPrice - this.fullPrice * (this.rollback / 100)
	},
	getServicePercentPrices: function () {},
	logger: function () {
		console.log(this.fullPrice)
		console.log(this.servicePercentPrice)
		console.log(this.screens)
		console.log(this.services)
	},
	disabledChange: function () {
		screens.forEach(screen => {
			const select = screen.querySelector('select')
			const input = screen.querySelector('input')
			select.disabled = true
			input.disabled = true
		})
		otherItemsPercent.forEach(item => {
			const check = item.querySelector('input[type=checkbox]')
			check.disabled = true
		})

		otherItemsNumber.forEach(item => {
			const check = item.querySelector('input[type=checkbox]')
			check.disabled = true
		})

		buttonPlus.disabled = true
	},
	changeButton: function () {
		startBtn.style.display = 'none'
		resetBtn.style.display = 'flex'
	},
	reset: function () {
		this.EnabledChange()
		this.removeScreenBlock()
		this.clear()
		startBtn.style.display = 'block'
		resetBtn.style.display = 'none'
		this.start()
	},
	EnabledChange: function () {
		screens.forEach(screen => {
			const select = screen.querySelector('select')
			const input = screen.querySelector('input')
			select.disabled = false
			input.disabled = false
		})
		otherItemsPercent.forEach(item => {
			const check = item.querySelector('input[type=checkbox]')
			check.disabled = false
			check.checked = false
		})

		otherItemsNumber.forEach(item => {
			const check = item.querySelector('input[type=checkbox]')
			check.disabled = false
			check.checked = false
		})

		buttonPlus.disabled = false

		inputRangeValue.textContent = 0 + '%'
		inputRange.value = 0
	},
	clear: function () {
		this.screenPrice = 0
		this.ServicePricesPercent = 0
		this.ServicePricesNumber = 0
		this.fullPrice = 0
		this.servicePercentPrice = 0
		this.servicesPercent = {}
		this.servicesNumber = {}

		total.value = ''
		totalCountOther.value = ''
		fullTotalCount.value = ''
		totalCountRollback.value = ''
		totalCount.value = ''
		this.screens = []
	},
	removeScreenBlock: function () {
		screens = document.querySelectorAll('.screen')

		screens.forEach((screen, index) => {
			const select = screen.querySelector('select')
			const input = screen.querySelector('input')
			select.selectedIndex = 0
			input.value = ''

			if (index > 0) {
				screen.remove()
			}
		})
	},
	rollbackDefault: function () {},
}

appData.init()
