/*

*/

function nicknameGenerator(name){
    var vowels = ["a", "e", "i", "o", "u", "y"];
    if (name.length < 4) {
      return "Error: Name too short"
    }
    if (vowels.includes(name[2])) {
      return name.slice(0,4);
    } else {
      return name.slice(0,3);
    }
  }

console.log(nicknameGenerator("Jimmy"));
console.log(nicknameGenerator("Jeannie"));