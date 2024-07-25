'use strict'
const string = '11ssssssssssssssssssssssssssssssssssssssssss111';
const num = 11;

const formatStr = function(str) {
	if(typeof(str) !== 'string') {
		return 'введите строку';
	} else if (str.length > 30) {
		str = str.trim();
		str = str.slice(0, 30) + '...';
		return str;
	}
}

console.log(formatStr(num));
console.log(formatStr(string));