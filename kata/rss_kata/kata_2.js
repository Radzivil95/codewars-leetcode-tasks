/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
*/

function solution(str, ending){

    if(str.slice(str.length - ending.length, str.length) == ending){
      return true
    } else {
      return false
    }
  }

console.log(solution('abcde', 'cde'));