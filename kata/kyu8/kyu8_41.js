/*

*/

function squareOrSquareRoot(array) {
    let result = [];

    for(let i = 0; i < array.length; i++) {

      if(Number.isInteger(Math.sqrt(array[i]))) {

        result.push(Math.sqrt(array[i]));

      } else {
        
        result.push(array[i]**2);

      }
    }
    return result;  
}

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));