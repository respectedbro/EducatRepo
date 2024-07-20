let num = 266219;


function additNum(num) {
	num = String(num).split('');
	let sum = 1;
	
	num.forEach((number) => {
		sum *= Number(number);
	})
	return sum;
}

console.log(additNum(num));

let cubeOfNum = additNum(num) ** 3;

console.log(String(cubeOfNum).slice(0, 2));