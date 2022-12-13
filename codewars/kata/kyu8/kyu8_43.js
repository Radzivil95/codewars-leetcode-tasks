function isPalindrome(x) {
    let y = x.split("").reverse().join("");
    if(x.toLowerCase() == y.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

console.log(isPalindrome("hello"));
console.log(isPalindrome("Abba"));