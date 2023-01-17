/*
 Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
 */


function getSum(a, b) {
   let counter = 0;
   let x;
   let y;
   if (a == b) {
    return a;
   }
   if (x < 0) {
    return x;
   }
   if (a > b) {
    y = b;
    x = a;
   } else {
    y = a;
    x = b;
   }
   for(let i = y; i <= x; i++) {
    counter = counter + i;
   }
   return counter;
}

console.log(getSum(0,-1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log(getSum(5, -1));