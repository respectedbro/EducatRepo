'use strict';
const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',];
let now = new Date().getDay();

if (now === 0) {
    now = 6;
} else {
    now -= 1;
}

week.forEach((elem, i) => {
    if (i === 5 || i === 6) {
        if (i === now) {
            console.log(`Выходной ${elem} Сегодня`);
        } else {
            console.log(`Выходной ${elem}`);
        }
    } else if (i === now) {
        console.log(`Сегодня ${elem}`);
    } else {
        console.log(elem);
    }
});

// не знаю как в консоль вывести курсивом или жирным(не гуглится)