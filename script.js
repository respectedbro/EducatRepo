'use strict'

const lang = 'en';
const days = {
	ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
	en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};
console.log(days[lang]);


if (lang === 'ru') {
	console.log(days.ru);
} else if (lang === 'en') {
	console.log(days.en);
}

switch(lang) {
	case 'ru':
		console.log(days.ru);
		break;
	case 'en':
		console.log(days.en);
		break;	
}


const namePerson = 'Артём';
const person = namePerson === 'Артём' ? 'директор' : namePerson === 'Александр' ? 'преподаватель' : 'студент';
console.log(person);