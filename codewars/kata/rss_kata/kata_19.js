/*
The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
    
    let x = word.toLowerCase().split("");
    let y = [];
    let result = "";
    for (let i = 0; i < x.length; ++i) {
        if(y.includes(x[i])) {
            result += ")";
        } else {
            y.push(x[i]);
            result += "(";
        }
    }
    return result;
}


console.log(duplicateEncode("DIN"));
console.log(duplicateEncode("recede"));


