/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
*/
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine() {
    let x = {};
    let y = arguments;
    for (i = 0; i < y.length; i++) {
        for(key in y[i]) {
            if(x[key] == undefined) {
                x[key] = y[i][key];
            } else {
                x[key] = x[key] + y[i][key];
            }
        }
    }
    return x;
}

console.log(combine(objA, objB, objC));
console.log(combine(objA, objB));

// does not pass random tests
// function combine(a = {}, b = {}, c = {}, d = {}) {
//     let x = [a, b, c, d];
//     let y = {};
//     for(let i = 0; i < x.length; i++) {
//         for(key in x[i]) {
//             if(y[key] == undefined) {
//                 y[key] = x[i][key]; 
//             } else {
//                 y[key] = parseInt(y[key]) + parseInt(x[i][key]);
//             }
//         }
//     }
//     return y;
// } 
