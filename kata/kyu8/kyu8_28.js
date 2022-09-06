/*
Complete the solution so that it reverses all of the words within the string passed in.
*/

function reverseWords(str){
    // str = [...str].reverse().join("");
    return str.split(" ").reverse().join(" "); // reverse those words
  }

console.log(reverseWords("hello world!"));

var n=12345;
console.log((''+n).split(''));
