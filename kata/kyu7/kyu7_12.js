/*
Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

The next number that experiments this particular behaviour is 370 with the same power.

Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

Let's see some ca
*/

function eqSumPowdig(hMax, exp) {
    let result = [];
    
    for(let i = 2; i <= hMax; i++) {
        let x = i + "";
        let tmp = 0;
        for(let j = 0; j < x.length; j++) {
            tmp += + parseInt(x[j] ** exp); 
        }
        if( i == tmp) {
            result.push(tmp);
        }
    }
    return result;
}
console.log(eqSumPowdig(155, 3));