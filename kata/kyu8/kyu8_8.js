/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).*/

function powersOfTwo(n){
    let x = [1,];
    for (let i = 1; i <= n; i++) {
        x.push(2 ** i);
    }
    return x;
  }

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
console.log(powersOfTwo(4));

