// Even numbers in an array

function evenNumbers(array, number) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if( array[i] % 2 == 0) {
      result.push(array[i])
    }
  }
  return result.slice(result.length - number);
}


console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))