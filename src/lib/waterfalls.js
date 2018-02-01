// const wallHeights = [5, 3, 7, 2, 6, 4, 5, 9, 1, 0, 8, 0];
const matrixHeight = wallHeights.length;
const maxHeight = Math.max(...wallHeights) - 1;
import wallHeights from ('../Waterfall')



export default openAir = wallHeights.map((elem) => {
  return maxHeight - elem;
})



export default matrixBuilder = (array, height, output = []) => {
  let line = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      line.push('.');
      array[i] = array[i] - 1;
    } else {
      line.push('X');
    }
  }
  if (height > 0) {
    output.push(line);
    matrixBuilder(array, height - 1, output);
  }
  return output;
};


export default fillMatrix = (matrix) => {
  // loop through each array in matrix from bottom
  for (let i = matrix.length - 1; i > 0; i--) {
    // loop through sub arrays
    for (let j = 0; j < matrix[i].length; j++) {
      let tempFill = '~';
      if (matrix[i][j] !== 'X') {
        if (matrix[i][j-1] === 'X' || matrix[i][j-1] === '~') {
        matrix[i][j] = tempFill;
        }
      }
      if (matrix[i][matrix[i].length - 1] === '~') {
        let k = matrix[i].length - 1;
        while (matrix[i][k] !== 'X') {
          matrix[i][k] = '.';
          k--;
        }
      }
    }
  }
  return matrix;
}
