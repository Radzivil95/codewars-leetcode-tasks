/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

var isPalindrome = function(x) {
    let y = String(x);
    let z = y.split("").reverse().join("");
    if (y == z) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));