/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).
*/

function countBy(x, n) {
    let z = [];
    let y = 0
    for( let i = 0; i < n; i++) {
        y = y + x;
        z.push(y);
    }
    return z;
  }

console.log(countBy(1,10));
console.log(countBy(2,5));