/*
 Complete the function that takes a string of English-language text and returns the number of consonants in the string.
 Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
 */

function consonantCount(str) {
  let x = ['a', 'e', 'i', 'o', 'u', ' '];
  let counter = 0;
  str = str.replace(/[^a-zа-яё]/gi, '');
  for( let i = 0; i < str.length; i++) {
    if(!x.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}


console.log(consonantCount('helLo world'));