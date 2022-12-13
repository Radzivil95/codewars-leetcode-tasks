/*
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.
*/

function findMissing(arr1, arr2) {
    // let index;
    //   for(let i = 0; i < arr1.length; i++) {
    //       index = arr2.indexOf(arr1[i])
    //       if (index > -1) {
    //           delete arr2[index];
    //       } else {
    //           return arr1[i];
    //       }
    //   }
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] != arr2[i]) {
        return arr1[i];
    }
      } 
  }
  
console.log(findMissing([1, 2, 3], [1, 3]));
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));