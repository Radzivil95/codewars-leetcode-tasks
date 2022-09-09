/*
For this kata you will have to forget how to add two numbers.
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/
function add(num1, num2) {
    let x = String(num1).split("").reverse();
    let y = String(num2).split("").reverse();
    let result = [];
    let max = Math.max(x.length, y.length);
    for (let i = 0; i < max; i ++) {
        result.push(parseInt(x[i] || 0) + parseInt(y[i] || 0));
    }
    return parseInt(result.reverse().join(""));  
}
console.log(add(2, 11));
console.log(add(122, 81));
