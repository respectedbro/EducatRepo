let num = 266219;

let cubeOfNum = additNum(num) ** 3;

function additNum(num) {
  let sum = 1;
	num = String(num).split('');
	
	num.forEach((number) => {
		sum *= Number(number);
	})

	return sum;
}

console.log(additNum(num));

console.log(String(cubeOfNum).slice(0, 2));