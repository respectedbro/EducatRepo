const title = 'My project';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 700;
const rollback = 88;
const fullPrice = 1000000;
const adaptive = true;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость верстки экранов ${fullPrice} долларов`);

console.log(screens.toLocaleLowerCase().split(' '));

console.log((fullPrice * (rollback/100)));
