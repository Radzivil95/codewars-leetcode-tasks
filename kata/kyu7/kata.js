"use strict";
////////////////////// 1 ///////////////////////////////
/*The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.

For example, if n = 20, the resulting sequence will be: */

// function collatz(n) {
//     let y = [];
//     while (n > 1) {
//         if (n % 2 == 0) {
//             n = n / 2;
//         }   else {
//             n = n * 3 + 1;
//         }
//         y.push(n);
//     }
//     return y.length + 1;
// }
// console.log(collatz(20));

////////////////////// 2 ///////////////////////////////
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 */

// function isIsogram(str){
//     let x = str.toLowerCase().split("");
//     let uniq = [];
//     for (let i = 0; i < x.length; i++ ) {
//         let y = x[i];
//         if (uniq.includes(y)) {
//             i++;
//         } else {
//             uniq.push(y);
//         }
//     }
//     console.log(uniq);
//     if (x.join("") === uniq.join("")) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram(""));
// console.log(isIsogram("isIsogram"));

/* */



function rpsls(pl1,pl2){
    if (pl1 == pl2) {
        return 'draw';
    } else if (pl1 == "rock") {
        if (pl2 == "lizard" || pl2 == "scissors"){
            return 'Player 1 Won!';
        } else {
            return 'Player 2 Won!';
        }
    } else if (pl1 == "paper") {
        if (pl2 == "rock" || pl2 == "spock") {
            return 'Player 1 Won!'; 
        }  else {
            return 'Player 2 Won!';
        }
    } else if (pl1 == "scissors") {
        if (pl2 == "paper" || pl2 == "lizard") {
            return 'Player 1 Won!'; 
        }  else {
            return 'Player 2 Won!';
        }
    } else if (pl1 == "lizard") {
        if (pl2 == "paper" || pl2 == "spock") {
            return 'Player 1 Won!'; 
        }  else {
            return 'Player 2 Won!';
        }
    } else if (pl1 == "spock") {
        if (pl2 == "scissors" || pl2 == "rock") {
            return 'Player 1 Won!'; 
        }  else {
            return 'Player 2 Won!';
        }
    }
    
    }
console.log(rpsls('rock', "scissors"));
console.log(rpsls('rock','spock'));
console.log(rpsls('rock', 'rock'));