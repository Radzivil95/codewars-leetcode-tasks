/* 
Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.
The inputs will always be two positive integers between 2 and 99.
*/

function isCoprime(x, y) {
    let a = [];
    let b = [];
    for (let i = 0; i <= x; i++) {
        if (x % i === 0) {
            a.push(i);
        }
    }
    for (let i = 0; i <= y; i++) {
        if (y % i === 0) {
            b.push(i);
        }
    }
    let result = a.filter(x => b.indexOf(x) !== -1);
    result = result.slice(-1);
    if (result.join() == 1) {
        return true;
    } else {
        return false;
    }
  }

console.log(isCoprime(12, 39));
console.log(isCoprime(20, 27));
