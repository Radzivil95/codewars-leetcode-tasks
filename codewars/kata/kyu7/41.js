/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
Assume that the input n will always be a positive integer.
*/

function sumCubes(n){
  let result = 0;
  for(let i = 0; i <= n; i++) {
    result += i**3;
  }
  return result;
}

console.log(sumCubes(3));