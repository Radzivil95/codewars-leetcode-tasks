/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
*/

function century(year) {
    let x = 0;
    while (year > 0){
      year = year - 100;
      x = x + 1;
    }
    return x;
  }

console.log(century(1705));
console.log(century(89));
console.log(century(2000));
console.log(century(1601));
console.log(century(1900));