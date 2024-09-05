const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => {
    return total + curr;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => {
    return total * curr;
  }, 1)
};

const power = function(num, pow) {
  let final = 1;
	for (let i = 0; i < pow; i++)
    final *= num;
  return final;
};

const factorial = function(num) {
	if(num == 0)
    return 1;
  else
    return num * factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
