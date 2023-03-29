// Length of missing array
function getLengthOfMissingArray(arrayOfArrays) {
  if(arrayOfArrays != null ) {
    return 0;
  }
  if(arrayOfArrays.length == 0) {
    return 0;
  }
  
  let x = [];
  for(let i = 0; i < arrayOfArrays.length; i++) {
    if(arrayOfArrays[i].length == 0) {
      return 0;
    }
    x.push(arrayOfArrays[i].length);
  }
  x.sort((a,b) => a - b);
  let y = x[0];
  for(let i = y; i < x[x.length - 1]; i++) {
    if(!x.includes(i+1)) {
      return i+1;
    }
  }
}


// console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
// console.log(getLengthOfMissingArray([ ]));
// console.log(getLengthOfMissingArray([[2, 1],
//   [3, 2, 4],
//   [3, 2, 2, 3, 1],
//   [1, 4, 2, 1, 3, 4]]));
// console.log(getLengthOfMissingArray([[0, 4, 1, 2],
//   [],
//   [3, 0, 0],
//   [3, 2],
//   [1, 2, 1, 3, 3]]));
// console.log(getLengthOfMissingArray([[2, 4, 0, 0],
//   [4, 4, 1, 0, 1, 3, 3, 3, 4, 2],
//   [4, 4, 4, 1, 0],
//   [1, 2, 4, 1, 3, 0],
//   [0, 0, 0, 1, 2, 1, 2, 2, 3],
//   [0, 4, 3, 0, 1, 3, 2],
//   [4, 0, 0, 3, 0, 1, 2, 2],
//   [3, 0, 3, 4, 1, 3, 3, 1, 4, 4,0],
//   [3, 2, 4, 2, 3, 2, 3, 1, 0, 4, 2, 0, 1]]));

console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ));