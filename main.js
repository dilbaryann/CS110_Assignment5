const readlineSync = require('readline-sync');
const { countWords, matrixProduct, sumOfEachRow, sumOfMatrices, trim } = require('./utils');

const mat1 = [
  [1, 2],
  [3, 4],
];

const mat2 = [
  [5, 6],
  [7, 8],
];

// 1
console.log(matrixProduct(mat1, mat2));

// 2
// console.log(sumOfMatrices(mat1, mat2));

// 3
// console.log(sumOfEachRow(mat1));

// 4
// const str = readlineSync.prompt();
// console.log(countWords(str));

// 5
// const str = readlineSync.prompt();
// console.log(trim(str));
