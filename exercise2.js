var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};
var sum = 0;
for(let item in fruit){
	sum += fruit[item]
}	
console.log(sum)
