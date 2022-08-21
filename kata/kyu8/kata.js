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

///////////////////////////// 6 ////////////////////////
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

///////////////////////////// 7 ////////////////////////

/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.
 */

// function findMultiples(integer, limit) {
//     let x = [];
//     x.push(integer);
//     let y = integer;
//     while(x.length < Math.floor(limit/integer)){
//         x.push(y = y + integer);
//     }
//     return x;
//   }


// console.log(findMultiples(5, 25));
// console.log(findMultiples(1, 2));
// console.log(findMultiples(5, 7));
// console.log(findMultiples(4, 27));
// console.log(findMultiples(11, 54));

// console.log(27 / 4);
// console.log(Math.floor(27/4));

///////////////////////////// 8 ////////////////////////
/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).*/

// function powersOfTwo(n){
//     let x = [1,];
//     for (let i = 1; i <= n; i++) {
//         x.push(2 ** i);
//     }
//     return x;
//   }

// console.log(powersOfTwo(0));
// console.log(powersOfTwo(1));
// console.log(powersOfTwo(2));
// console.log(powersOfTwo(4));

///////////////////////////// 9 ////////////////////////
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//     let x = [];
//     for (let i = n; i > 0; i--) {
//         x.push(i);
//     }
//     return x;
//   };

// console.log(reverseSeq(5));
///////////////////////////// 10 ////////////////////////
/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/
// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
//   }

// console.log(lovefunc(2, 2));
// console.log(lovefunc(2, 1));
// console.log(lovefunc(143, 353));



///////////////////////////// 11 ////////////////////////
// function removeChar(str){

//     return str.slice(1,-1);
  
// };

// console.log(removeChar('eloquent'));

///////////////////////////// 12 ////////////////////////
// function isPythagoreanTriple(integers) {
//     let c = integers[2] ** 2;
//     let b = integers[1] ** 2;
//     let a = integers[0] ** 2;

//     if(a+b >=c) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isPythagoreanTriple([3, 4, 5]));
// console.log(isPythagoreanTriple([70, 18, 8]));
// console.log(isPythagoreanTriple([3, 5, 9]));
// console.log(isPythagoreanTriple([72, 78, 30]));