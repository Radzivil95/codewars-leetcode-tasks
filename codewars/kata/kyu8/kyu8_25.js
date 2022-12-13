/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/


function digitize(n) {
    let y = String(n);
    let x = [];
    for (let i = y.length - 1; i >= 0; i--) {
        x.push(Number(y[i]));
    }   
    return x;
}


console.log(digitize(35231));