// 1
function matrixProduct(mat1, mat2) {
  const matrix = [];
  for (let i = 0; i < mat1.length; i++) {
    matrix.push([]);
    for (let j = 0; j < mat1[i].length; j++) {
      matrix[i][j] = mat1[i][j] * mat2[i][j];
    }
  }
  return matrix;
}

// 2
function sumOfMatrices(mat1, mat2) {
  const matrix = [];
  for (let i = 0; i < mat1.length; i++) {
    matrix.push([]);
    for (let j = 0; j < mat1[i].length; j++) {
      matrix[i][j] = mat1[i][j] + mat2[i][j];
    }
  }
  return matrix;
}

// 3
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumOfEachRow(mat) {
  const matrix = [];
  for (let i = 0; i < mat.length; i++) {
    let sum = sumOfArray(mat[i]);
    matrix.push(sum);
  }
  return matrix;
}

// 4
function countWords(str) {
  const arr = str.split(' ');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      count++;
    }
  }
  return count;
}

// 5
function trim(str) {
  let startIndex, endIndex;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      startIndex = i;
      break;
    }
  }
  for (let i = str.length; i === 0; i--) {
    if (str[i] !== ' ') {
      endIndex = i;
      break;
    }
  }
  return str.substring(startIndex, endIndex);
}

module.exports = {
  matrixProduct,
  sumOfMatrices,
  sumOfEachRow,
  countWords,
  trim,
};
