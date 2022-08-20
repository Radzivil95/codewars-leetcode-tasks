"use strict"; /**/
// console.log()
///////////////////////////// 1 ////////////////////////
/*
Create a function that checks if a number n is divisible by two numbers x AND y.
All inputs are positive, non-zero digits.
*/

// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y === 0
// }

// console.log(isDivisible(3,3,4));
// console.log(isDivisible(12,3,4));

///////////////////////////// 2 ////////////////////////
/* You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples! */

// function fixTheMeerkat(arr) {
//     let x = arr.reverse();
//     return x;
// }

// console.log(["tail", "body", "head"]);
// console.log(["bottom", "middle", "top"]);

///////////////////////////// 3 ////////////////////////
/* An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string. */
// function contamination(text, char){
//     return char.repeat(text.length);
//   }

//   console.log(contamination("abc","z"));

///////////////////////////// 4 ////////////////////////
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:
*/
// function abbrevName(name){
//     let x = name.split(" ");
//     return x[0][0].toUpperCase()+"."+x[1][0].toUpperCase();

// }

// console.log(abbrevName("sam harris"));

///////////////////////////// 5 ////////////////////////

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds
*/

// function past(h, m, s){
//     return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
//   }

// console.log(past(1,1,1));

///////////////////////////// 5 ////////////////////////
/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/
// function invert(array) {
//     let x = [];
//     for (let i = 0; i < array.length; i++) {
//             x.push(array[i] * -1);
//     }
//     return x;
//  }
// console.log(invert([1,-2,3,-4,5]));
// console.log(invert([0]));