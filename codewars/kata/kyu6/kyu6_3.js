/**
 Task
A list S will be given. You need to generate a list T from it by following the given process:

Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.
 */

function arrange(s) {
  if (s.length < 2) {
    return s;
  }
    let t = [];
    while (s.length > 0) {
      t.push(s[0]);
      s.shift();
      if (s.length > 0) {
        t.push(s[s.length - 1]);
      }
      s.pop();
      s.reverse();
    }
    return t;
  }

  //Execution Timed Out (12000 ms)
console.log(arrange([1,2]));
console.log(arrange([4, 3, 2]));
console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]));  //[9, 1, 5, 7, -2, 6, -3, 8, 5]
console.log(arrange([1]))
console.log(arrange([]));
console.log(arrange([2, 4, 3, 4]));

