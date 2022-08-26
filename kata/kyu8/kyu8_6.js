/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/
function invert(array) {
    let x = [];
    for (let i = 0; i < array.length; i++) {
            x.push(array[i] * -1);
    }
    return x;
 }
console.log(invert([1,-2,3,-4,5]));
console.log(invert([0]));