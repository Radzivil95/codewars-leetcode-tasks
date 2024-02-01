/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
*/


function arrayPlusArray(arr1, arr2) {
  let x = arr1.concat(arr2);
  let result = 0;
  for(let i = 0; i < x.length; i++) {
    result += x[i];
  }
  return result;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));