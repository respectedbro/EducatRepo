let num = 266219;


function addingNum(num) {
	num = String(num).split('');
	let sum = 1;
	
	num.forEach((number) => {
		sum *= Number(number);
	})
	return sum;
}

console.log(addingNum(num));

let sumOfNum = addingNum(num) ** 3;

console.log(String(sumOfNum).slice(0, 2));