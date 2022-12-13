/*
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.
*/

function expressionMatter(a, b, c) {
    let x = [];
    x.push(a * (b + c));
    x.push(a * b * c);
    x.push(a + b * c);
    x.push((a + b) * c);
    let m = Math.max(...x);
    return m;
  }

console.log(expressionMatter(2, 1, 2));
