/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
 Essentially, rearrange the digits to create the highest possible number.
*/
function descendingOrder(n){
    let x = String(n);
    let y = x.split("");
    let result;
    y.sort();
    y.reverse();
    result = Number(y.join(""));
    return result;
  }

console.log(descendingOrder(1021));

// parseInt(String(n).split('').sort().reverse().join(''))