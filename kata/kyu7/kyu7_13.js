/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
*/

function rowSumOddNumbers(n) {
    // let x = 0;
    // for (let j = 0; j < n; j++) {
    //     x += j;
    // };
    // let arr = [];
    // for (let i = 1; i <= x + n; i++) {
    //     arr.push(i * 2 - 1);
    // }
    // let y = arr.slice(x, x + n);
    // let result = 0;
    // for(let a = 0; a < y.length; a++) {
    //     result += y[a];
    // }
    // return result;
    return n*n*n;
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(42));

// best return n*n*n   =(