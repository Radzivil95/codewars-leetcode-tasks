//Duplicate Zeros
/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
*/

var duplicateZeros = function(arr) {
  let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == 0){
      result.push(0);
      result.push(0);
      } else {
        result.push(arr[i]);
      }
      
    }
    return result;
};

//task
var duplicateZeros2 = function(arr) {
  let len = arr.length;
  for(let i = len - 1; i >= 0; i--) {
    if(arr[i] == 0) {
      arr.slice(i, 0, 0)
    }
  }
  while(arr.length > len) {
    arr.pop()
  }

}


console.log(duplicateZeros([1,0,2,3,0,4,5,0])); 
