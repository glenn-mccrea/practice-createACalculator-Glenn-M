// 1. Write a function for each operation listed above using the Math
// module.
// 2. Test each function with sample inputs to ensure it works as intended.
// 3. Combine the individual functions into a single "calculator" program
// where the user can select an operation and input the required values.
// 4. Test the calculator by performing the following:
// ● Find the absolute value of -45.67.
// ● Raise 5 to the power of 3.
// ● Calculate the square root of 144.
// ● Determine the largest and smallest values from [3, 78, -12,
// 0.5, 27].
// ● Generate a random number between 1 and 50.

//GROUP WORK:
//task 1
/* function absVal(num) {
  return Math.abs(num);
}
console.log(absVal(-45.67));

//task 2
function powCalc(num, pow) {
  return Math.pow(num, pow);
}
console.log(powCalc(5, 3));

//task 3
function calcSqrt(num) {
  return Math.sqrt(num);
}
console.log(calcSqrt(144));

//task 4
function calcMinMax(arr) {
  return Math.min(...arr), Math.max(...arr);
}
const numArray = [3, 78, -12, 0.5, 27];
console.log(calcMinMax(numArray));

//task 5
function randNum(x, y) {
  return Math.floor(Math.random() * y + 1);
}
console.log(randNum(1, 50));

//task 6
function roundCalc() {} */

//SOLO completed
const numArray = [3, 78, -12, 0.5, 27];

const calculatorObj = {
  absVal: function (x) {
    return Math.abs(x);
  },
  powCalc: function (x, y) {
    return Math.pow(x, y);
  },
  calcSqrt: function (num) {
    return Math.sqrt(num);
  },

  calcMinMax: function (arr) {
    return Math.min(...arr), Math.max(...arr);
  },
  randNum: function (x, y) {
    return Math.floor(Math.random() * y + 1);
  },
  decimalRound: function (x) {
    return Math.round(100 * x) / 100;
  },
};

console.log(calculatorObj.absVal(-45.67));
console.log(calculatorObj.powCalc(5, 3));
console.log(calculatorObj.calcSqrt(144));
console.log(calculatorObj.calcMinMax(numArray));
console.log(calculatorObj.randNum(1, 50));
console.log(calculatorObj.decimalRound(5.83323));
