/* 
Task
Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.
*/

function racePodium(blocks) {
    let result = 0;
    for(let i =0; i < blocks.length; i++) {
      result += blocks[i]; 
    }
    return result;
  }

console.log(racePodium(11));