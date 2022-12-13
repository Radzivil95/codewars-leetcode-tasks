/**
 Create a function that returns the CSV representation of a two-dimensional numeric array.

 */

 function toCsvText(array) {
    return array.join("\n");
 }

console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ] ));