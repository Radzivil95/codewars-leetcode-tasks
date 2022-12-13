/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(x){
    let result = "";
 for (let i = 0; i < x.length; i++) {
    let z = parseInt(x[i]);
    if (z < 5) {
        result += "0";
    } else {
        result += "1";
    }
 }
 return result;
}

console.log(fakeBin('45385593107843568'));