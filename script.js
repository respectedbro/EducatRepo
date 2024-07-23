'use strict'

let lang = 'en';

// if (lang === 'ru') {
// 	console.log('Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс');
// } else if (lang === 'en') {
// 	console.log('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');
// }

// switch(lang) {
// 	case 'ru':
// 		console.log('Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс');
// 		break;
// 	case 'en':
// 		console.log('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');
// 		break;	
// }

const days = {
	ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
	en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};
console.log(days[lang]);


const namePerson = 'Артём';
const person = namePerson == 'Артём' ? 'директор' : namePerson == 'Александр' ? 'преподаватель' : 'студент';
console.log(person);