/* 
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
*/

String.prototype.toAlternatingCase = function () {

    let result = "";
    for (let i = 0; i < this.length; i++) {
      if (this[i] === this[i].toLowerCase()) {
        result += this[i].toUpperCase();
      } else {
        result += this[i].toLowerCase();
      }
    }
    return result;
  
}

let x = "hElLo world";

console.log(x.toAlternatingCase());