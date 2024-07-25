const arr = ['55', '456', '221', '43', '89', '665', '55'];
let res = arr.filter((num) => {
	if(num[0] === '2' || num[0] === '4') {
		return num
	}
});
console.log(res);

// тут я загуглил, когда-то решал такую, но в голову не лезут эти простые числа
function isPrime(num) {
    if(num < 2) 
		return false;
    for (let i = 2; i < num; i++) {
        if(num % i == 0 )
            return false;
    }
    return true;
}

for(let i = 0; i < 100; i++){
    if(isPrime(i)) {
		console.log(`${i} Делители этого числа 1 и ${i}`);
	}	
}