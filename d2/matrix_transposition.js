// Pair (ban, eli, sajan)

const transpose = function(matrix) {
  let transposedArray = [];
  for (let item of matrix[0]) {
    transposedArray.push([]);
  }
  for (let item of matrix){
    let i = 0;
    for(let item2 of item){
      transposedArray[i].push(item2);
      i++;
    }
    
  }
  return transposedArray;
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

/* 1 1 1 1 
2 2 2 2 
3 3 3 3 
4 4 4 4 */

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

/* 1 3 5 
2 4 6 */

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));