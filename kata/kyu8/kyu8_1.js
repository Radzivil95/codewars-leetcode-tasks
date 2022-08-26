///////////////////////////// 1 ////////////////////////
/*
Create a function that checks if a number n is divisible by two numbers x AND y.
All inputs are positive, non-zero digits.
*/

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

console.log(isDivisible(3,3,4));
console.log(isDivisible(12,3,4));