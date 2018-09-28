'use strict';
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) {
    return [];
  }
  let minR = 0;
  let maxR = matrix.length - 1;
  let minC = 0;
  let maxC = matrix[0].length - 1;
  const ans = [];

  console.log(`${minR}-${maxR} ${minC}-${maxC}`);
  while (minR <= maxR && minC <= maxC) {
    for (let c = minC; c <= maxC; ++c) {
      ans.push(matrix[minR][c]);
    }
    minR += 1;
    for (let r = minR; minC <= maxC && r <= maxR; ++r) {
      ans.push(matrix[r][maxC]);
    }
    maxC -= 1;
    for (let c = maxC; minR <= maxR && c >= minC; --c) {
      ans.push(matrix[maxR][c]);
    }
    maxR -= 1;
    for (let r = maxR; minC <= maxC && r >= minR; --r) {
      ans.push(matrix[r][minC]);
    }
    minC += 1;
    console.log(`${minR}-${maxR} ${minC}-${maxC}`);
  }

  return ans;
};

console.log(spiralOrder([
  [1,2,3],
  [4,5,6],
  [7,8,9],
]), [1,2,3,6,9,8,7,4,5]);
console.log(spiralOrder([
  [1,2,3,10],
  [4,5,6,11],
  [7,8,9,12],
]), [1,2,3,10,11,12,9,8,7,4,5,6]);
console.log(spiralOrder([
  [1,2,3,10],
  [4,5,6,11],
  [7,8,9,12],
  [21,22,23,24],
]), [1,2,3,10,11,12,24,23,22,21,7,4,5,6,9,8]);
console.log(spiralOrder([
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [21,22,23],
]), [1,2,3,6,9,23,22,21,7,4,5,8]);
console.log(spiralOrder([]), []);
