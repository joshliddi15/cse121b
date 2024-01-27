/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2) {
  return number1 + number2;
}

const subtract = function(number1, number2) {
  return number1 - number2;
};

multiply = (number1, number2) => number1 * number2;

divide = (number1, number2) => number1 / number2;

/* Function Definition - Add Numbers */
function addNumbers() {
  const num1 = Number(document.getElementById('add1').value);
  const num2 = Number(document.getElementById('add2').value);
  const result = add(num1, num2);
  document.getElementById('sum').value = result;
}

/* Function Expression - Subtract Numbers */
function subtractNumbers() {
  const num1 = Number(document.getElementById('subtract1').value);
  const num2 = Number(document.getElementById('subtract2').value);
  const result = subtract(num1, num2);
  document.getElementById('difference').value = result;
}

/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
  const num1 = Number(document.getElementById('factor1').value);
  const num2 = Number(document.getElementById('factor2').value);
  const result = multiply(num1, num2);
  document.getElementById('product').value = result;
}

/* Open Function Use - Divide Numbers */
const divideNumbers = () => {
  const num1 = Number(document.getElementById('dividend').value);
  const num2 = Number(document.getElementById('divisor').value);
  const result = divide(num1, num2);
  document.getElementById('quotient').value = result;
}

/* Decision Structure */
const getTotal = () => {	
	const total = document.getElementById('total');
  const member = document.getElementById('member').checked
  let subtotal = Number(document.getElementById('subtotal').value)
  member ? (subtotal *= .8) : subtotal;
  total.innerHTML = `$${subtotal.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
const array = document.getElementById("array")
let numberArray = [];
for (let i = 1; i <= 13; i++) {
	numberArray.push(i);
}
array.innerHTML = numberArray;

/* Output Odds Only Array */
const odds = document.getElementById("odds");
let oddsArray = numberArray.filter(number => number % 2 != 0);
odds.innerHTML = oddsArray;

/* Output Evens Only Array */
const evens = document.getElementById("evens");
let evensArray = numberArray.filter(number => number % 2 == 0);
evens.innerHTML = evensArray;

/* Output Sum of Org. Array */
const sumOfArray = document.getElementById("sumOfArray");
let sumArray = numberArray.reduce((sum, number) => sum + number);
sumOfArray.innerHTML = sumArray;

/* Output Multiplied by 2 Array */
const multiplied = document.getElementById("multiplied");
let doubleArray = numberArray.map(number => number * 2);
multiplied.innerHTML = doubleArray;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = document.getElementById("sumOfMultiplied");
let sumOfDoubledArray = doubleArray.reduce((sum, number) => sum + number);
sumOfMultiplied .innerHTML = sumOfDoubledArray;


/* EVENT LISTENERS */
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
document.querySelector('#getTotal').addEventListener('click', getTotal);