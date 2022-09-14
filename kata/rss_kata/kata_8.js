/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
*/

function maxTriSum(numbers){
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length;j++) {
            let tmp;
            if (numbers[j] < numbers[j+1]) {
                tmp = numbers[j+1];
                numbers[j+1] = numbers[j];
                numbers[j] = tmp;
            }
        }
    }
    let x = numbers.filter((e, i) => {
        return numbers.indexOf(e) === i;
    })
    return parseInt(x[0]) + parseInt(x[1] + parseInt(x[2]));
}

console.log(maxTriSum([2,9,13,10,5,2,9,5]));
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]));