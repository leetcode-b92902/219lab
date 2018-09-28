/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1;
  digits = digits.slice();

  for (let i = digits.length - 1; i >= 0; --i) {
    digits[i] += carry;
    if (digits[i] >= 10) {
      digits[i] -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
  }

  if (carry == 1) {
    digits.unshift(1);
  }

  return digits;
};


const arrayEqual = (a, b) => a.every((v, i) => v == b[i]);

const assert = require('assert');
console.log(plusOne([1,2,3]) , [1,2,4]);
console.log(plusOne([4,3,2,1]) , [4,3,2,2]);
console.log(plusOne([1,9,9,9]) , [2,0,0,0]);
console.log(plusOne([9,9,9]) , [1,0,0,0]);
