let books = document.querySelectorAll('.book')
let bookList = document.querySelectorAll('.book ul')
let body = document.querySelector('body')
let book3 = document.querySelectorAll('.book [target="_blank"]')[4]
let adv = document.querySelector('.adv')

let book2 = document.querySelectorAll('.book')[0]
let chapters2 = book2.querySelectorAll('ul li')
let book5 = document.querySelectorAll('.book')[5]
let chapters5 = book5.querySelectorAll('ul li')
let book6 = document.querySelectorAll('.book')[2]
let chapters6 = book6.querySelectorAll('ul li')


books[1].after(books[0])
books[4].after(books[2])
books[2].before(books[3])
books[5].after(books[2])

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'
book3.textContent = 'Книга 3. this и Прототипы Объектов'
adv.remove()

book2.querySelector('ul').append(
		chapters2[0],
		chapters2[1],
		chapters2[3],
		chapters2[6],
		chapters2[8],
		chapters2[4],
		chapters2[5],
		chapters2[7],
		chapters2[9],
		chapters2[2],
		chapters2[10]
	)

book5.querySelector('ul').append(
		chapters5[0],
		chapters5[1],
		chapters5[9],
		chapters5[3],
		chapters5[4],
		chapters5[2],
		chapters5[5],
		chapters5[6],
		chapters5[7],
		chapters5[8],
		chapters5[10]
	)

	let newChptr = document.createElement('li')
	newChptr.textContent = 'Глава 8: За пределами ES6'
	book6.querySelector('ul').append(newChptr)
	chapters6[7].after(newChptr);
