/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

var isSubsequence = function(s, t) {
    // let x = s.split("");
    // let y = t.split("");
    // let result = [];
    // for(let i = 0; i < x.length; i++) {
    //     for(let j = 0; j < y.length; j++) {
    //         if (x[i] == y[j]) {
    //             result.push(parseInt(y.indexOf(y[j])));
    //         }
    //     }
    // }
    // const getUnique = (arr) => {
    //     return arr.filter((el, ind) => ind === arr.indexOf(el));
    //   };
      
    // let b = getUnique(result);
    // console.log(b);
    // let z = b.slice();
    // z.sort((a,b) => a - b);
    // if (b.join("") == z.join("") && b.length == x.length) {
    //     return true;
    // } else {
    //     return false;
    // }
    let i=0;
    let j=0;
    while(i<s.length){
        if(j===t.length){
            return false;
        }
        if(s[i]===t[j]){
            i++;
        }
        j++;
    };
    return true;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
console.log(isSubsequence("bb", "ahbgdc"));
console.log(isSubsequence("ab", "baab"));