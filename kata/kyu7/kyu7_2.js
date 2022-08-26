/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.
 */

function isIsogram(str){
    let x = str.toLowerCase().split("");
    let uniq = [];
    for (let i = 0; i < x.length; i++ ) {
        let y = x[i];
        if (uniq.includes(y)) {
            i++;
        } else {
            uniq.push(y);
        }
    }
    console.log(uniq);
    if (x.join("") === uniq.join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram(""));
console.log(isIsogram("isIsogram"));