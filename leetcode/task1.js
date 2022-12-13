/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

var romanToInt = function(s) {
    let romanNum = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    let x = [];
    let result = 0;
    for(let i = 0; i < s.length; i++) {
            if(romanNum[s[i]] < romanNum[s[i+1]]) {
                let z = parseInt(romanNum[s[i+1]]) - parseInt(romanNum[s[i]]);
                x.push(z);
                result -= parseInt(romanNum[s[i+1]]);
            } else {
                x.push(parseInt(romanNum[s[i]]));
            }
        }
    console.log(x)
    for(let i = 0; i < x.length; i++) {
        result += x[i]
    }
        return result;
}
    // console.log(x);
    // for(let j = 0; j < x.length; j++) {
    //     // console.log(parseInt(x[j]));
    //     // console.log(parseInt(x[j+1]));
    //     if (x[j] >= x[j + 1]) {
    //         console.log(result)
    //         result = result + x[j];
    //         console.log(result += parseInt(x[j]))
    //     } else {
    //         result += parseInt(x[j+1]) - parseInt(x[j]);
    //     }
    // }
    ;
    // if(x.includes("IV") || x.includes("IX") || x.includes("XL") || x.includes("XC") || x.includes("CD") || x.includes("CM")) {

    // } else {
    //     for (let j = 0; j < x.length; j++) {
    //         result += x[j];
    //     }
    //     return result;
    // }




console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));