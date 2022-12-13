/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
*/

function century(year) {
    let y = year / 100;
    let count = 0;
    for(let i = 0; i < y; i++) {
        if(year > i) {
            count++;
        }
        
    }
    return count;
}

console.log(century(1605));
console.log(century(89));
