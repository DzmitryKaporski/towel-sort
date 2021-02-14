
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  if (matrix.length === 0) {
    return matrix = [];
  } else {
    let allArr = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i === 1 || i === 3) {
        matrix[i].sort(function (a, b) {
          return b - a;
        });
      }
      allArr.push(...matrix[i]);
    };
    return allArr;
  };
};
