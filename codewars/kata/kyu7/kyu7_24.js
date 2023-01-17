function addingShifted (arrayOfArrays, shift) {
  let x = arrayOfArrays[0];
  let y = arrayOfArrays[1];
  let result = [];
  console.log(x[9])
  for(let i = 0; i < shift; i++) {
    result.push(x[i]);
  }
  return result;
}


console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]], 3));